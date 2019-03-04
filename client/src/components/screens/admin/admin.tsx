import React, { ReactNode, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Main } from '../../page';
import { Admin, ApplicationProperties } from '../../../models';
import { AdminSettingsForm, ApplicantsTable } from './';
type AdminScreenProps = {
  applicationProperties: ApplicationProperties;
  setApplicationProperties: (applicationProperties: ApplicationProperties) => void;
  toggleModal: (modalShouldOpen: boolean, modalChildren: ReactNode) => void;
  setSession: (admin: Admin | null) => void;
} & RouteComponentProps;

export default function AdminScreen({ setSession, applicationProperties, setApplicationProperties }: AdminScreenProps) {
  return (
    <Main maxWidth={'1400px'}>
      <h1>Admin 🛠</h1>
      <AdminSettingsForm
        setSession={setSession}
        applicationProperties={applicationProperties}
        setApplicationProperties={setApplicationProperties}
      />
      <ApplicantsTable />
    </Main>
  );
}
