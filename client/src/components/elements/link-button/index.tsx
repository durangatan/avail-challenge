import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkStyled = styled(Link)<LinkButtonProps>`
  text-align: center;
  padding: 24px 0;
  width: 100%;
  text-decoration: none;
  background: ${({ theme, buttonType }) => getBackgroundColor(buttonType, theme)};
  color: ${({ theme, buttonType }) => getFontColor(buttonType, theme)};
  font-size: ${({ theme }) => theme.font.size.h1};
`;
export type ButtonType = 'default' | 'action' | 'success' | 'error';

export const getBackgroundColor = (buttonType: ButtonType, theme: any): string => {
  switch (buttonType) {
    case 'default': {
      return theme.color.gray;
    }
    case 'action': {
      return theme.themeColorHex;
    }
    case 'success': {
      return theme.color.green;
    }
    case 'error': {
      return theme.color.red;
    }
    default: {
      return theme.color.gray;
    }
  }
};

export const getFontColor = (buttonType: ButtonType, theme: any): string => {
  switch (buttonType) {
    case 'default': {
      return theme.color.black;
    }
    case 'action': {
      return theme.color.white;
    }
    case 'success': {
      return theme.color.white;
    }
    case 'error': {
      return theme.color.white;
    }
    default: {
      return theme.color.black;
    }
  }
};

type LinkButtonProps = {
  to: string;
  text: string;
  buttonType: ButtonType;
};

export default function LinkButton(props: LinkButtonProps) {
  return <LinkStyled {...props}>{props.text}</LinkStyled>;
}

LinkButton.defaultProps = {
  buttonType: 'default'
};
