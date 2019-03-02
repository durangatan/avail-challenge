import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Main } from '../../page';
import { RouteComponentProps } from 'react-router-dom';
import { AdminLoginForm, TenantRegistrationForm } from './forms';
import { FormTag } from '../../elements/form';
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
} & RouteComponentProps;

export default function Home(props: HomeScreenProps) {
  return (
    <Main>
      <h1>Tenant Portal 🏠</h1>
      <FormContainer>
        <TenantRegistrationForm />
        <AdminLoginForm />
      </FormContainer>
    </Main>
  );
}
