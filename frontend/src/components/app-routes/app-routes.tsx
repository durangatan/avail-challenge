import React, { useState, ReactNode } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Admin,Apply } from '../screens';
import { Modal } from '../elements';
export default function AppRoutes() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalChildren, setModalChildren] = useState<ReactNode>(null);
  const toggleModal = (modalShouldOpen: boolean, modalChildren: ReactNode) => {
    setModalIsOpen(modalShouldOpen);
    if (modalShouldOpen) {
      setModalChildren(modalChildren);
    }
  };
  return (
    <React.Fragment>
      <Switch>
        <Route path="/apply/:id" render={routeProps => <Apply {...routeProps} toggleModal={toggleModal} />} />
        <Route path="/admin" component={Admin} />
        <Route path="/" component={Home} />
      </Switch>
      <Modal isOpen={modalIsOpen}>{modalChildren}</Modal>
    </React.Fragment>
  );
}
