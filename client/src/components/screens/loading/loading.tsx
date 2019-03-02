import React from 'react';
import { Main } from '../../page';
import { Spinner } from '../../elements';
export default function LoadingScreen() {
  return (
    <Main>
      <h1>Loading! 🤔</h1>
      <Spinner character={'🕐'} />
      <p>Please wait while we verify a few things.</p>
    </Main>
  );
}
