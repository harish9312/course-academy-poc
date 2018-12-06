import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import './common.scss';
import asyncComponent from './components/resuableComponents/AsyncComponent';
import registerServiceWorker from './registerServiceWorker';
export const HomePage = asyncComponent(() => import('./components/HomePage'), 'HomePage');

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </HashRouter>,
  document.getElementById('course-academy') as HTMLElement
);
registerServiceWorker();
