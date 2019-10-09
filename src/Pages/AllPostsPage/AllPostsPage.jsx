import React from 'react';
import styles from './AllPostsPage.module.css';
import {Link} from 'react-router-dom';
import BlogPost from '../BlogPostPage/BlogPostPage';
// import BlogPostPage from '../BlogPostPage/BlogPostPage';

function AllPostsPage(props) {
	return(
		<div className={styles.AllPostsPage}>
      {props.posts.map(post => 
      <Link to='/'>
        <BlogPost 
          title={post.title}
          content={post.content}
        />
        </Link>
      )}

		</div>
	)
}

export default AllPostsPage;