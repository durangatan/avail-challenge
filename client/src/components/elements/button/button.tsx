import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { ButtonType, getBackgroundColor, getFontColor } from '../link-button';
import { Spinner } from '..';

type ButtonProps = {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  text: string;
  buttonType: ButtonType;
  isLoading?: boolean;
};

const ButtonStyled = styled.button<ButtonProps>`
  text-align: center;
  padding: 12px 0;
  width: 100%;
  text-decoration: none;
  background: ${({ theme, buttonType }) => getBackgroundColor(buttonType, theme)};
  color: ${({ theme, buttonType }) => getFontColor(buttonType, theme)};
  font-size: ${({ theme }) => theme.font.size.h3};
  border: none;
  transition: background-color 0.2s ease-out;
  cursor: ${({ isLoading }) => (isLoading ? 'not-allowed' : 'pointer')};

  &:hover,
  &:active,
  &:focus {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme, buttonType }) => darken(0.2)(getBackgroundColor(buttonType, theme))};
  }
`;

export default function Button(props: ButtonProps) {
  return <ButtonStyled {...props}>{props.isLoading ? <Spinner character={'🕐'} /> : props.text}</ButtonStyled>;
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
  buttonType: 'Default',
  isLoading: false
};
