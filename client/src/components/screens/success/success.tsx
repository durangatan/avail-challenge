import React from 'react';
import { Main } from '../../page';
import { LinkButton } from '../../elements';

export default function Success({ message }: { message: string }) {
  return (
    <Main>
      <h1>Success! 🎉</h1>
      <p>{message}</p>
      <LinkButton to="/" text="Home" buttonType="action" />
    </Main>
  );
}
