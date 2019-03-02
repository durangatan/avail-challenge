import React from 'react';
import styled from 'styled-components';

import { ButtonType, getBackgroundColor, getFontColor } from '../link-button';

type ButtonProps = {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  text: string;
  buttonType: ButtonType;
};

const ButtonStyled = styled.button<ButtonProps>`
  text-align: center;
  padding: 12px 0;
  width: 100%;
  text-decoration: none;
  background: ${({ theme, buttonType }) => getBackgroundColor(buttonType, theme)};
  color: ${({ theme, buttonType }) => getFontColor(buttonType, theme)};
  font-size: ${({ theme }) => theme.font.size.h3};
`;

export default function Button(props: ButtonProps) {
  return <ButtonStyled {...props}>{props.text}</ButtonStyled>;
}

export const ButtonContainer = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-self: flex-end;
`;

Button.defaultProps = {
  buttonType: 'Default'
};
