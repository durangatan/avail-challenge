import React, { useState, ReactNode, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Home, Admin as AdminScreen, Apply, Success } from '../screens';
import { Modal } from '../elements';
import { Admin, ApplicationProperties } from '../../models';
import { getApplicationProperties } from '../../api';

import Cookie from 'js-cookie';
export default function AppRoutes() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalChildren, setModalChildren] = useState<ReactNode>(null);
  const [admin, setAdmin] = useState<Admin | null>(null);
  // can store app properties in cookie?
  const [appProperties, setAppProperties] = useState<ApplicationProperties>(
    new ApplicationProperties({ themeColorHex: '#000000', formType: 'Basic' })
  );
  useEffect(() => {
    // const adminCookie = Cookie.get('admin');
    // if (adminCookie) {
    // 	setAdmin(new Admin(adminCookie));
    // }
    // setAdmin(new Admin({ email: 'joeduran8@gmail.com' }));
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
    <React.Fragment>
      <Switch>
        <Route
          path="/apply/:id"
          render={routeProps => <Apply {...routeProps} toggleModal={toggleModal} formType={appProperties.formType} />}
        />
        <Route path="/admin" component={AdminScreen} />
        <Route
          path="/success"
          render={routeProps =>
            routeProps.location.state.message ? (
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
            admin ? (
              <AdminScreen {...routeProps} toggleModal={toggleModal} />
            ) : (
              <Home {...routeProps} toggleModal={toggleModal} />
            )
          }
        />
      </Switch>
      <Modal isOpen={modalIsOpen}>{modalChildren}</Modal>
    </React.Fragment>
  );
}