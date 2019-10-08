import React from 'react';
// import styles from './AdminPage.module.css';
// import {Route} from 'react-router-dom';
// import * as postAPI from '../../services/posts-api';
import AllPostsPage from '../AllPostsPage/AllPostsPage';
import AddPostPage from '../AddPostPage/AddPostPage';


function AdminPage(props) {
  const {handleDeletePost, handleAddPost, posts } = props
  return (
    <div className="Admin">
      <h4>Admin Portal</h4>
      <main>
          <AllPostsPage
            history={props.history}
            posts={posts}
            handleDeletePost={handleDeletePost}
            />
    
          <AddPostPage
          handleAddPost = {handleAddPost}
          />
      </main>
    </div>
  )
}

export default AdminPage;