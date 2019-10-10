import React from 'react';
import {Route, Switch} from 'react-router-dom';
import styles from './MainPage.module.css';
import userService from '../../utils/userService';
import ShowPostPage from '../ShowPostPage/ShowPostPage';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import AboutPage from '../AboutPage/AboutPage';
import ContactPage from '../ContactPage/ContactPage';
import AllPostsPage from '../AllPostsPage/AllPostsPage';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import AdminPage from '../AdminPage/AdminPage';
import * as postAPI from '../../services/posts-api';


function MainPage(...props) {
  return (
    <div className={styles.MainPage}>
      <Switch>
      <Route exact path='/' render={() => 
        <AllPostsPage 
          posts={props[0].posts}
          history={props[0].history} 
        /> } />
      <Route exact path='/api/posts/${post._id}' render={() => 
        <ShowPostPage 
          posts={props[0].posts}
          history={props[0].history} 
          handleDeletePost={props[0].handleDeletePost}
        />} />
      <Route exact path='/login' render={({history}) => 
        <LoginPage
          handleSignupOrLogin={props[0].handleSignupOrLogin} 
          history={history}
        />} />
      <Route exact path='/signup' render={({history}) => 
        <SignupPage 
          handleSignupOrLogin={props[0].handleSignupOrLogin} 
          history={history}		
          />} />
      <Route exact path='/about' render={() => <AboutPage />} />
      <Route exact path='/contact' render={() => <ContactPage />} />
      <PrivateRoute
        component={AdminPage}
        posts={props[0].posts}
        handleAddPost={props[0].handleAddPost}
        handleDeletePost={props[0].handleDeletePost}
        handleUpdatePost={props[0].handleUpdatePost}
        user={props[0].user}
        path='/admin' 
        
        />
      </Switch>
    </div>
  )
};

export default MainPage;