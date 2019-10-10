import React from 'react';
import styles from './AllPostsPage.module.css';
import {Link} from 'react-router-dom';
import ShowPostPage from '../ShowPostPage/ShowPostPage';
import PostCard from '../../Components/PostCard/PostCard';


function AllPostsPage({ posts, history }) {
  console.log(posts)
	return(
		<div className={styles.AllPostsPage}>
      {/* {props.posts.map(post => 
          <PostCard 
            posts={props.posts}
            history={props.history} 
            id={post._id}
            title={post.title}
            date={post.date}
            content={post.content}
            tags={post.tags}
          />
      )} */}

     {posts.map( p => (
       <>
        <PostCard post={p}/>
       </>
     ))}
		</div>
	)
}

export default AllPostsPage;