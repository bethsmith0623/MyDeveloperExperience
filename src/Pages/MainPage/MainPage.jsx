import React from 'react';
import styles from './MainPage.module.css';
import BlogPostPage from '../BlogPostPage/BlogPostPage';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import AboutPage from '../AboutPage/AboutPage';
import AdminPage from '../AdminPage/AdminPage';
import ContactPage from '../ContactPage/ContactPage';
import AllPostsPage from '../AllPostsPage/AllPostsPage';
import {Route, Switch, Redirect} from 'react-router-dom';
import userService from '../../utils/userService';


function Main(props) {
	return (
		<div className={styles.Main}>
			<Switch>
				<Route exact path='/' render={() => <AllPostsPage /> } />
				<Route exact path='/blog/:id' render={() => <BlogPostPage />} />
				<Route exact path='/login' render={({history}) => 
					<LoginPage
						handleSignupOrLogin={props.handleSignupOrLogin} 
						history={history}
						/>} />
				<Route exact path='/signup' render={({history}) => 
					<SignupPage 
						handleSignupOrLogin={props.handleSignupOrLogin} 
						history={history}		
					/>} />
				<Route exact path='/about' render={() => <AboutPage />} />
				<Route exact path='/contact' render={() => <ContactPage />} />
				<Route exact path='/admin' render={() => (
					userService.getUser() ?
					<AdminPage />
						:
					<Redirect to='' />
					)}/>
			</Switch>
		</div>
	)
};

export default Main;