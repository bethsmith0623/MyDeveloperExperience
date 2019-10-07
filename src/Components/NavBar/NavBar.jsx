import React, {Component} from 'react';
import styles from './NavBar.module.css';
import {Route, Switch, Link} from 'react-router-dom';
import SignupPage from '../../Pages/SignupPage/SignupPage';
import LoginPage from '../../Pages/LoginPage/LoginPage';
import BlogPostPage from '../../Pages/BlogPostPage/BlogPostPage';
import AboutPage from '../../Pages/AboutPage/AboutPage';
import ContactPage from '../../Pages/ContactPage/ContactPage';

const NavBar = (props) => {
	let nav = props.user ?
		<div>
			<Link className="NavBtn" to='/admin'><button>Admin</button></Link>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<Link className="NavBtn" to=''><button>Blog</button></Link>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<Link className="NavBtn" to='/about'><button>About</button></Link>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<Link className="NavBtn" to='/contact'><button>Contact</button></Link>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<Link className="NavBtn" to=''><button>Logout</button></Link>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<input className="Search" type="text" value="Search Bar"/>   
		</div>   
		:
		<div>
			<Link className="NavBtn" to=''><button>Blog</button></Link>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<Link className="NavBtn" to='/about'><button>About</button></Link>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<Link className="NavBtn" to='/contact'><button>Contact</button></Link>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<Link className="NavBtn" to='/login'><button>Login</button></Link>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<Link className="NavBtn" to='/signup'><button>Signup</button></Link>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<input className="Search" type="text" value="Search Bar"/>      
		</div>;

	return (
		<div className={styles.NavBar}>
			{nav}
		</div>
	);
};


export default NavBar;