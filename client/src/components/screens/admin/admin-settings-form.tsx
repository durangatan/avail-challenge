import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, Dropdown, Input } from '../../elements';
import { getApplicationProperties, saveApplicationProperties } from '../../../api';
import { ApplicationProperties, Admin, FormType } from '../../../models';

const SettingsContainer = styled.nav`
  display: flex;
  flex-direction: column;
`;

export default function AdminSettingsForm({
  setSession,
  setApplicationProperties,
  applicationProperties
}: {
  applicationProperties: ApplicationProperties;
  setApplicationProperties: (applicationProperties: ApplicationProperties) => void;
  setSession: (admin: Admin | null) => void;
}) {
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
      <Input
        type="color"
        name="theme-color"
        label="Theme Color"
        value={applicationProperties.themeColorHex}
        onChange={event => {
          saveApplicationProperties(
            new ApplicationProperties({ ...applicationProperties, themeColorHex: event.currentTarget.value })
          ).then((applicationProperties: ApplicationProperties) => {
            setApplicationProperties(applicationProperties);
          });
        }}
      />
      <Button onClick={() => setSession(null)} text="log out" buttonType="action" />
    </SettingsContainer>
  );
}
