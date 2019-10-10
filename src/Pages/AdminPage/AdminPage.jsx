import React from 'react';
// import styles from './AdminPage.module.css';
// import {Route} from 'react-router-dom';
// import * as postAPI from '../../services/posts-api';
import AllPostsPage from '../AllPostsPage/AllPostsPage';
import AddPostPage from '../AddPostPage/AddPostPage';


function AdminPage(props) {
  console.log('admin props', props)
  return (
    <div className="Admin">
      <main>
          <AddPostPage
            handleAddPost = {props.handleAddPost}
          />
          <hr/>
          <h5>All Posts</h5>
          <AllPostsPage
            posts={props.posts}
            history={props.history}
            handleDeletePost={props.handleDeletePost}
            />
      </main>
    </div>
  )
}

export default AdminPage;