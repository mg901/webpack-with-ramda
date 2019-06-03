import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Login from '@components/Login';
import Organizations from '@components/Organizations';
import OrganizationDetails from '@components/Organizations/OrganizationDetails';

export default (
  <Switch>
    <Route
      exact
      path="/admin"
      render={() =>
        window.localStorage.getItem('isLogedIn') ? (
          <Redirect to="/admin/list" />
        ) : (
          <Redirect to="/admin/login" />
        )
      }
    />
    <Route path="/admin/list" component={Organizations} />
    <Route path="/admin/config" component={Organizations} />
    <Route path="/admin/login" component={Login} />
    <Route path="/admin/details" component={OrganizationDetails} />
    <Route render={() => <h1>404 COMPONENT</h1>} />
  </Switch>
);
