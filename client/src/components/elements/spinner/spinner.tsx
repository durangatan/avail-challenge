import React from 'react';
import styled, { keyframes } from 'styled-components';
const spin = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const InnerSpinner = styled.div`
  animation: ${spin} 1s infinite;
`;

export default function Spinner({ character }: { character: string }) {
  return <InnerSpinner>{character}</InnerSpinner>;
}
