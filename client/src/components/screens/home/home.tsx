import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Main } from '../../page';
import { RouteComponentProps } from 'react-router-dom';
import { AdminLoginForm, ApplicantRegistrationForm } from './forms';
import { ApplicantArguments, Applicant, Admin, AdminArguments } from '../../../models';
import { createApplicant, login } from '../../../api';
import { media } from '../../util/style';
// should have a login /register form
// https://reacttraining.com/react-router/web/example/auth-workflow

const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10px;

  form {
    width: 100%;
  }

  ${media.largeUp`
    flex-direction: row;
    form {
      width: 50%;
      padding: 50px;
    }
  `}
`;

type HomeScreenProps = {
  toggleModal: (modalShouldOpen: boolean, modalChildren: ReactNode) => void;
  setSession: (admin: Admin | null) => void;
} & RouteComponentProps;

export default function Home(props: HomeScreenProps) {
  const onCreateApplicant = () => {
    return props.history.push('/success', {
      message: 'Congrats on starting your journey with us. Expect an email shortly.'
    });
  };

  return (
    <Main>
      <h1>Applicant Portal 🏠</h1>
      <FormContainer>
        <ApplicantRegistrationForm onCreateApplicant={onCreateApplicant} />
        <AdminLoginForm setSession={props.setSession} />
      </FormContainer>
    </Main>
  );
}
