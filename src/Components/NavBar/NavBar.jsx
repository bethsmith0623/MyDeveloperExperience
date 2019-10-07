import React from 'react';
import styles from './NavBar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
// import SignupPage from '../../Pages/SignupPage/SignupPage';
// import LoginPage from '../../Pages/LoginPage/LoginPage';
// import BlogPostPage from '../../Pages/BlogPostPage/BlogPostPage';
// import AboutPage from '../../Pages/AboutPage/AboutPage';
// import ContactPage from '../../Pages/ContactPage/ContactPage';

const NavBar = (props) => {
	let nav = props.user ?
		<div>
			{ props.user && <Link className="NavBtn btn-default" to='/admin'><button>Admin</button></Link>}
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<Link className="NavBtn btn-default" to=''><button>Blog</button></Link>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<Link className="NavBtn btn-default" to='/about'><button>About</button></Link>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<Link className="NavBtn btn-default" to='/contact'><button>Contact</button></Link>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<Link className="NavBtn btn-default" to='' onCLick={props.handleLogout}><button>Logout</button></Link>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<input className="Search" type="text" value="Search Bar"/>   
		</div>   
		:
		<div>
			<Link className="NavBtn btn-default" to=''><button>Blog</button></Link>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<Link className="NavBtn btn-default" to='/about'><button>About</button></Link>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<Link className="NavBtn btn-default" to='/contact'><button>Contact</button></Link>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<Link className="NavBtn btn-default" to='/login'><button>Login</button></Link>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<Link className="NavBtn btn-default" to='/signup'><button>Signup</button></Link>
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