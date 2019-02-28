import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';


type ApplyScreenProps = {
	toggleModal: (modalShouldOpen: boolean, modalChildren: ReactNode) => void;
} & RouteComponentProps;
export default function Apply(props:ApplyScreenProps){
	return <div>Apply</div>
}