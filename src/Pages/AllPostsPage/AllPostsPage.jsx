import React from 'react';
import styles from './AllPostsPage.module.css';
import {Link} from 'react-router-dom';
// import BlogPostPage from '../BlogPostPage/BlogPostPage';

function AllPostsPage() {
	return(
		<div className={styles.AllPostsPage}>
		<Link to='/blog/{:id}'><p>Post 1</p></Link>
		<Link to='/blog/{:id}'><p>Post 2</p></Link>
		<Link to='/blog/{:id}'><p>Post 3</p></Link>
		</div>
	)
}

export default AllPostsPage;