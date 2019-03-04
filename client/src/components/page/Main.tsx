import styled from 'styled-components';

export const Main = styled.main<{ maxWidth?: string }>`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '1200px')};
  margin: auto;
`;
