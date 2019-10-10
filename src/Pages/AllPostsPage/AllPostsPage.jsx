import React from 'react';
import styles from './AllPostsPage.module.css';
import {Link} from 'react-router-dom';
import ShowPostPage from '../ShowPostPage/ShowPostPage';
import PostCard from '../../Components/PostCard/PostCard';


function AllPostsPage(props) {
	return(
		<div className={styles.AllPostsPage}>
      {props.posts.map(post => 
    
          props.history.location.pathname === "/admin" 
          ? <Link to='/'>
            <ShowPostPage 
            title={post.title}
            />
            </Link>
          :
          <PostCard 
            posts={props.posts}
            history={props.history} 
            id={post._id}
            title={post.title}
            date={post.date}
            content={post.content}
            tags={post.tags}
          />
      )}

		</div>
	)
}

export default AllPostsPage;