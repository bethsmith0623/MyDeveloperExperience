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
			<Link className="NavBtn" to=''><button>Blog</button></Link>
			<Link className="NavBtn" to='/about'><button>About</button></Link>
			<Link className="NavBtn" to='/contact'><button>Contact</button></Link>
			<Link className="NavBtn" to='' onClick={props.handleLogout}><button>Logout</button></Link>
      { props.user.isAdmin && 
      <Link className="NavBtn" to='/admin'><button>Admin</button></Link>}
		</div>   
      :
		<div>
			<Link className="NavBtn" to=''><button>Blog</button></Link>
			<Link className="NavBtn" to='/about'><button>About</button></Link>
			<Link className="NavBtn" to='/contact'><button>Contact</button></Link>
			<Link className="NavBtn" to='/login'><button>Login</button></Link>
			<Link className="NavBtn" to='/signup'><button>Signup</button></Link>
		</div>;
 
	return (
		<div className={styles.NavBar}>
			{nav}
		</div>
	);
};


export default NavBar;