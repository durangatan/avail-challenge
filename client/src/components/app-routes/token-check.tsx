import React, { ReactNode, useEffect, useState, JSXElementConstructor } from 'react';
import { checkApplicantToken } from '../../api';
import { LoadingScreen, UnauthorizedScreen } from '../screens';
import { WithApplicantId } from '../../models';
import { RouteComponentProps } from 'react-router';

type AuthState = 'Loading' | 'Successful' | 'Failed';

/*
 * Used for routes that require a token query param. 
 * Will either render the unauthorized page or another react element based on a prop depending
 * on the validity of the token.
 */

export default function TokenCheck({
  successful,
  location,
  match
}: {
  successful: JSX.Element;
} & RouteComponentProps<WithApplicantId>) {
  const [authState, setAuthState] = useState<AuthState>('Loading');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const applicantId = match.params.id;
    const token = urlParams.get('token');
    if (!token) {
      setAuthState('Failed');
      return;
    }
    checkApplicantToken(Number(applicantId), token)
      .then(() => {
        setAuthState('Successful');
      })
      .catch(() => {
        setAuthState('Failed');
      });
  }, []);

  switch (authState) {
    case 'Loading':
      return <LoadingScreen />;
    case 'Successful':
      return successful;
    case 'Failed':
      return <UnauthorizedScreen />;
    default:
      return <LoadingScreen />;
  }
}
