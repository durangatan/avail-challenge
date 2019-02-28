import React, { useState, ReactNode } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Workout, Edit, Stats, Results } from '../screens';
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
        <Route path="/workout" render={routeProps => <Workout {...routeProps} toggleModal={toggleModal} />} />
        <Route path="/edit" component={Edit} />
        <Route path="/stats" component={Stats} />
        <Route path="/results" component={Results} />
        <Route path="/" component={Home} />
      </Switch>
      <Modal isOpen={modalIsOpen}>{modalChildren}</Modal>
    </React.Fragment>
  );
}
