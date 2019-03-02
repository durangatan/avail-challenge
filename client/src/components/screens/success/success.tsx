import React from 'react';
import { Main } from '../../page';

export default function Success({ message }: { message: string }) {
  return (
    <Main>
      <h1>Success! 🎉</h1>
      <p>{message}</p>
    </Main>
  );
}
