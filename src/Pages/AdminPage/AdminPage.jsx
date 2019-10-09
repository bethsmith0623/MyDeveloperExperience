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
      <main>
          <AddPostPage
          handleAddPost = {handleAddPost}
          />
          <hr/>
          <h5>All Posts</h5>
          <AllPostsPage
            history={props.history}
            posts={posts}
            handleDeletePost={handleDeletePost}
            />
      </main>
    </div>
  )
}

export default AdminPage;