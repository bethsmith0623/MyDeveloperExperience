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
			<Link className="btn btn-default" to=''><button>Blog</button></Link>
			<Link className="btn btn-default" to='/about'><button>About</button></Link>
			<Link className="btn btn-default" to='/contact'><button>Contact</button></Link>
			<Link className="btn btn-default" to='' onClick={props.handleLogout}><button>Logout</button></Link>
      { props.user.isAdmin && 
      <Link className="btn btn-default" to='/admin'><button>Admin</button></Link>}
		</div>   
      :
		<div>
			<Link className="btn btn-default" to=''><button>Blog</button></Link>
			<Link className="btn btn-default" to='/about'><button>About</button></Link>
			<Link className="btn btn-default" to='/contact'><button>Contact</button></Link>
			<Link className="btn btn-default" to='/login'><button>Login</button></Link>
			<Link className="btn btn-default" to='/signup'><button>Signup</button></Link>
		</div>;
 
	return (
		<div className={styles.NavBar}>
			{nav}
		</div>
	);
};


export default NavBar;