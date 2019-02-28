import React, { useState, ReactNode, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Admin as AdminScreen, Apply } from '../screens';
import { Modal } from '../elements';
import { Admin } from '../../models';
import Cookie from 'js-cookie';
export default function AppRoutes() {
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
	const [modalChildren, setModalChildren] = useState<ReactNode>(null);
	const [admin, setAdmin] = useState<Admin | null>(null);

	useEffect(() => {
		const adminCookie = Cookie.get('admin');
		if (adminCookie) {
			setAdmin(new Admin(adminCookie));
		}
	});
	const toggleModal = (
		modalShouldOpen: boolean,
		modalChildren: ReactNode
	) => {
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
					render={routeProps => (
						<Apply {...routeProps} toggleModal={toggleModal} />
					)}
				/>
				<Route path="/admin" component={AdminScreen} />
				<Route
					path="/"
					render={routeProps =>
						admin ? (
							<AdminScreen
								{...routeProps}
								toggleModal={toggleModal}
							/>
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
