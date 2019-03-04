import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/app-routes';
import * as serviceWorker from './serviceWorker';
import Page from './components/page';

ReactDOM.render(
  <Page>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Page>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
