import React from 'react';
import './AdminPage.css';
import {Route, Link} from 'react-router-dom';
// import * as postAPI from '../../services/posts-api';
// import AllPostsPage from '../AllPostsPage/AllPostsPage';
import AddPostPage from '../AddPostPage/AddPostPage';
// import ShowPostPage from '../ShowPostPage/ShowPostPage';


function AdminPage(props) {
  console.log('admin', props)
  // console.log(prop)
  return (
    <div className="AdminPage">
      <main>
        <AddPostPage
          handleAddPost = {props.handleAddPost}
        />
        <hr/>
        <h5 className="list">All Posts</h5>
        {props.posts.map(post => 
        <ul className="list">
          <li>
          <Link to={`/api/posts/${post && post._id}`}>{post && post.title}</Link>
          <button onClick={() => props.handleDeletePost(post._id)}>Delete</button>
          </li>
        </ul>
        )}
      </main>
    </div>
  )
}

export default AdminPage;