import React from 'react';
import {Route, Redirect} from 'react-router-dom';

function PrivateRoute({path, user, component: Component, ...rest }) {
  
  return (
    <Route path={path} render={props => 
      user && user.isAdmin ?
      <Component 
        handleAddPost={props.handleAddPost}
        handleUpdatePost={props.handleUpdatePost}
        handleDeletePost={props.handleDeletePost}
      {...rest} {...props}/>
      : <Redirect to="/" />
    }/>
  )
}


export default PrivateRoute;
