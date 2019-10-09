import React from 'react';
import styles from './AllPostsPage.module.css';
import {Link} from 'react-router-dom';
// import BlogPostPage from '../BlogPostPage/BlogPostPage';

function AllPostsPage(props) {
	return(
		<div className={styles.AllPostsPage}>
      {/* {props[1].history.map( posts =>  */}
        <Link to='/api/posts/${post:id}'><p>Title</p></Link>
      {/* )} */}

		</div>
	)
}

export default AllPostsPage;