import React, {Component} from 'react';
import styles from './NavBar.module.css';
import {Route, Switch, Link} from 'react-router-dom';
import SignupPage from '../../Pages/SignupPage/SignupPage';
import LoginPage from '../../Pages/LoginPage/LoginPage';
import BlogPostPage from '../../Pages/BlogPostPage/BlogPostPage';
import AboutPage from '../../Pages/AboutPage/AboutPage';
import ContactPage from '../../Pages/ContactPage/ContactPage';

class NavBar extends Component {
	render() {
		return (
			<div className={styles.NavBar}>
					<Link className="NavBtn" to='/admin'><button>Admin</button></Link>
					<Link className="NavBtn" to='/'><button>Blog</button></Link>
					<Link className="NavBtn" to='/about'><button>About</button></Link>
					<Link className="NavBtn" to='/contact'><button>Contact</button></Link>
					<Link className="NavBtn" to='/login'><button>Login</button></Link>
					<Link className="NavBtn" to='/signup'><button>Signup</button></Link>
					<input className="Search" type="text" value="Search Bar"/>      
			</div>
		)
	}       
};

export default NavBar;