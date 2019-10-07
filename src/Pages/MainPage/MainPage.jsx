import React from 'react';
import styles from './MainPage.module.css';
import BlogPostPage from '../BlogPostPage/BlogPostPage';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import AboutPage from '../AboutPage/AboutPage';
import AdminPage from '../AdminPage/AdminPage';
import ContactPage from '../ContactPage/ContactPage';
import AllPostsPage from '../AllPostsPage/AllPostsPage';
import {Route, Switch} from 'react-router-dom';


function Main() {
	return (
		<div className={styles.Main}>
			<Switch>
				<Route exact path='/' render={() => <AllPostsPage /> } />
				<Route exact path='/blog/:id' render={() => <BlogPostPage />} />
				<Route exact path='/login' render={() => <LoginPage />} />
				<Route exact path='/signup' render={() => <SignupPage />} />
				<Route exact path='/about' render={() => <AboutPage />} />
				<Route exact path='/contact' render={() => <ContactPage />} />
				<Route exact path='/admin' render={() => <AdminPage />} />
			</Switch>
		</div>
	)
};

export default Main;