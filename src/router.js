import React from 'react';
import { Provider } from "react-redux";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/scss/bootstrap.scss';

import store from "./store";
import AuthContainer from "./container/auth";
import DashboardContainer from "./container/dashboard";

export default () => {
  return (
      <Router history={createBrowserHistory()}>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/app/dashboard" component={DashboardContainer} />
              <Route path="/" component={AuthContainer} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </Router>
    )
}

