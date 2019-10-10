import React from 'react';
import styles from './AllPostsPage.module.css';
import {Link} from 'react-router-dom';
import BlogPost from '../BlogPostPage/BlogPostPage';
// import BlogPostPage from '../BlogPostPage/BlogPostPage';

function AllPostsPage(props) {
  console.log('all posts', props)
	return(
		<div className={styles.AllPostsPage}>
      {props.posts.map(post => 
    
          props.history.location.pathname === "/admin" 
          ? <Link to='/'>
            <BlogPost 
            title={post.title}
            />
            </Link>
          :
          <BlogPost 
            title={post.title}
            content={post.content}
          />
      )}

		</div>
	)
}

export default AllPostsPage;