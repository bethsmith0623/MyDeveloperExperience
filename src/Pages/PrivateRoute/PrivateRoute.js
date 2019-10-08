import React from 'react';
import {Route, Redirect} from 'react-router-dom';
// import BlogPostPage from '../BlogPostPage/BlogPostPage';
// import AdminPage from '../AdminPage/AdminPage';
// import AllPostsPage from '../AllPostsPage/AllPostsPage';


function PrivateRoute({ user, component: Component, ...rest }) {
  return (
    <Route render={props => 
      user && user.isAdmin ?
      <Component {...rest} {...props}/>
      : <Redirect to="/" />
    }/>
  )
}

// function PrivateRoute({props, component: Component, ...rest }) {
//   console.log(props)
//   return (
//     <Route render={props => (
//       props.user.isAdmin
//       ?
//       <div>
//       <AdminPage 
//         handleAddPost={props.handleAddPost}
//         handleDeletePost={props.handleDeletePost}
//         handleUpdatePost={props.handleUpdatePost}
//       />
//       <AllPostsPage />
//       <BlogPostPage 
//         handleUpdatePost={props.handleUpdatePost}              
//       />
//       </div>
//       :
//       <Redirect to={{
//         path: '/'
//       }} />
//     )}/> 
//   )
// }

export default PrivateRoute;
