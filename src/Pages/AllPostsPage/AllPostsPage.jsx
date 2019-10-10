import React from 'react';
import styles from './AllPostsPage.module.css';
// import {Link} from 'react-router-dom';
// import ShowPostPage from '../ShowPostPage/ShowPostPage';
import PostCard from '../../Components/PostCard/PostCard';


function AllPostsPage({ posts, history }) {
  console.log(posts)
	return(
		<div className={styles.AllPostsPage}>

     {posts.map( p => (
       <>
        <PostCard post={p}/>
       </>
     ))}
		</div>
	)
}

export default AllPostsPage;