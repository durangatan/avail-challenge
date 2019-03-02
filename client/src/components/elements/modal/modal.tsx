import React, { ReactNode } from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div<ModalProps>`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  background: ${props => props.theme.color.white};
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`;

const InnerModalFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 100%;
  width: 100%;
`;

type ModalProps = {
  isOpen: boolean;
  children: ReactNode;
};

export default function Modal({ isOpen, children }: ModalProps) {
  return (
    <ModalContainer isOpen={isOpen}>
      <InnerModalFlex>{children}</InnerModalFlex>
    </ModalContainer>
  );
}
