import React, { useState, ReactNode, useEffect } from 'react';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';

export type NotificationType = 'default' | 'error' | 'success' | 'alert';

const NOTIFICATION_DISPLAY_TIME = 5000;

type Props = {
  message: ReactNode;
  dismissable?: boolean;
  timeout?: number;
};

const NotificationContainer = styled.div<{ transitionState: TransitionStatus }>`
  position: fixed;
  top: 0;
  right: 0;
  padding: 15px 15px 13px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.green};
  z-index: 1000;
  opacity: ${({ transitionState }) => (transitionState === 'entering' ? '0' : '1')};
  max-height: ${({ transitionState }) => (transitionState === 'exiting' ? '0px' : '102px')};
  padding-top: ${({ transitionState }) => (transitionState === 'exiting' ? '0px' : '15px')};
  padding-bottom: ${({ transitionState }) => (transitionState === 'exiting' ? '0px' : '15px')};
  transition: opacity 0.3s, max-height 0.3s, padding-top 0.3s, padding-bottom 0.3s;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export default function Notification(props: Props) {
  const [hide, setHide] = useState<boolean>(true);

  const onDismiss = () => {
    setHide(true);
  };
  useEffect(() => {
    setHide(false);
    setTimeout(onDismiss, props.timeout);
  }, []);

  const { dismissable, message } = props;
  return (
    <Transition in={!hide} timeout={300} unmountOnExit={true}>
      {state => (
        <NotificationContainer transitionState={state}>
          <span>{message}</span>
          {dismissable && <button onClick={onDismiss}>ⓧ</button>}
        </NotificationContainer>
      )}
    </Transition>
  );
}

Notification.defaultProps = {
  timeout: NOTIFICATION_DISPLAY_TIME
};
