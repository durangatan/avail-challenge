import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, Dropdown } from '../../elements';
import { getApplicationProperties, saveApplicationProperties } from '../../../api';
import { ApplicationProperties, Admin, FormType } from '../../../models';

const SettingsContainer = styled.nav`
  display: flex;
  flex-direction: column;
`;

export default function AdminSettingsForm({ setSession }: { setSession: (admin: Admin | null) => void }) {
  const [applicationProperties, setApplicationProperties] = useState<ApplicationProperties>(
    new ApplicationProperties({ themeColorHex: '#000000', formType: 'Basic' })
  );
  useEffect(() => {
    getApplicationProperties().then(applicationProperties => {
      setApplicationProperties(applicationProperties);
    });
  }, []);
  const dropdownOptions = [{ label: 'Basic', value: 'Basic' }, { label: 'Full', value: 'Full' }];
  const activeIndex = dropdownOptions.findIndex(option => option.value === applicationProperties.formType);
  return (
    <SettingsContainer>
      <h2>Settings</h2>
      <Dropdown
        activeIndex={activeIndex}
        options={dropdownOptions}
        onChange={e => {
          const formType = e.currentTarget.value as FormType;
          saveApplicationProperties(new ApplicationProperties({ ...applicationProperties, formType })).then(
            (applicationProperties: ApplicationProperties) => {
              setApplicationProperties(applicationProperties);
            }
          );
        }}
        name="Form Type"
      />
      <Button onClick={() => setSession(null)} text="log out" buttonType="action" />
    </SettingsContainer>
  );
}
