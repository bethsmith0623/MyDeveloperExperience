import React from 'react';
import styles from './NavBar.module.css';

function NavBar() {
    return (
        <div className={styles.NavBar}>
        <button>Blog</button>
        <button>About</button>
        <button>Contact</button>
        <button>Login</button>
        <button>Signup</button>
        <input type="text" value="Search Bar"/>      
        </div>
    )
};

export default NavBar;