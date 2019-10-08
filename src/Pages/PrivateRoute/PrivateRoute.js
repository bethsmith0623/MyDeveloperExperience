import React from 'react';
import {Route, Redirect} from 'react-router-dom';

function PrivateRoute({ user, component: Component, ...rest }) {
  return (
    <Route render={props => 
      user && user.isAdmin ?
      <Component {...rest} {...props}/>
      : <Redirect to="/" />
    }/>
  )
}


export default PrivateRoute;
