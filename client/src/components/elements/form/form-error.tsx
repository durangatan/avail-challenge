import React from 'react';
import styled from 'styled-components';

const ErrorParagraph = styled.p`
  display: flex;
  color: ${({ theme }) => theme.color.red};
`;

export default function FormError({ message }: { message: string }) {
  return <ErrorParagraph>{message}</ErrorParagraph>;
}
