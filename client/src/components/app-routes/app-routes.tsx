import React, { useState, ReactNode, useEffect } from 'react';
import { Route, Switch, Redirect, RouteComponentProps } from 'react-router-dom';
import Cookie from 'js-cookie';
import { Home, Admin as AdminScreen, Apply, Success } from '../screens';
import { TokenCheck } from './';
import { Modal, Notification } from '../elements';
import { Admin, ApplicationProperties, WithApplicantId } from '../../models';
import { getApplicationProperties } from '../../api';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../components/theme';
export default function AppRoutes() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalChildren, setModalChildren] = useState<ReactNode>(null);
  const [notificationMessage, setNotificationMessage] = useState<string>('');
  const [session, setSession] = useState<Admin | null>(null);
  const [appProperties, setAppProperties] = useState<ApplicationProperties>(
    new ApplicationProperties({ themeColorHex: '#164e8d', formType: 'Basic' })
  );

  const setPersistedSession = (admin: Admin | null) => {
    if (admin) {
      Cookie.set('session', JSON.stringify(admin));
      setSession(admin);
    } else {
      Cookie.remove('session');
      setSession(null);
    }
  };

  useEffect(() => {
    const sessionCookie = Cookie.get('session');
    if (sessionCookie) {
      setSession(JSON.parse(sessionCookie));
    }
  }, []);

  useEffect(() => {
    getApplicationProperties().then((applicationProperties: ApplicationProperties) => {
      setAppProperties(applicationProperties);
    });
  }, []);
  const toggleModal = (modalShouldOpen: boolean, modalChildren: ReactNode) => {
    setModalIsOpen(modalShouldOpen);
    if (modalShouldOpen) {
      setModalChildren(modalChildren);
    }
  };
  return (
    <ThemeProvider theme={{ ...defaultTheme, themeColorHex: appProperties.themeColorHex }}>
      <React.Fragment>
        <Switch>
          <Route
            path="/apply/:id"
            render={(routeProps: RouteComponentProps<WithApplicantId>) => (
              <TokenCheck
                {...routeProps}
                successful={
                  <Apply
                    {...routeProps}
                    toggleModal={toggleModal}
                    formType={appProperties.formType}
                    setNotificationMessage={setNotificationMessage}
                  />
                }
              />
            )}
          />
          <Route path="/admin" component={AdminScreen} />
          <Route
            path="/success"
            render={routeProps =>
              routeProps.location.state && routeProps.location.state.message ? (
                // if you got to the success route somehow without a message we'll redirect you home.
                // No Unearned Success! 💪
                <Success message={routeProps.location.state.message} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path="/"
            render={routeProps =>
              session && session.id ? (
                <AdminScreen
                  {...routeProps}
                  toggleModal={toggleModal}
                  setSession={setPersistedSession}
                  applicationProperties={appProperties}
                  setApplicationProperties={setAppProperties}
                />
              ) : (
                <Home {...routeProps} toggleModal={toggleModal} setSession={setPersistedSession} />
              )
            }
          />
        </Switch>
        <Modal isOpen={modalIsOpen}>{modalChildren}</Modal>
        {notificationMessage.length ? <Notification message={notificationMessage} /> : null}
      </React.Fragment>
    </ThemeProvider>
  );
}
