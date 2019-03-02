import React from 'react';
import { Main } from '../../page';
import { LinkButton } from '../../elements';

export default function Unauthorized() {
  return (
    <Main>
      <h1>Unauthorized 🙅‍♀️</h1>
      <p>Oops... You don't belong here.</p>
      <p>Maybe you already submitted your application?</p>
      <LinkButton to="/" text="Go Home" buttonType="action" />
    </Main>
  );
}
