import React from 'react';
import styles from './ShowPostPage.module.css';


function ShowPostPage (...props) {
  console.log('show', props)
  //show[0].posts[idx]._id
  console.log('show post', props[0].posts)

  let post = props[0].posts
  console.log('post',post)
  let id = post[0]._id
  console.log('id', id)
  
  return(
      <div className={styles.ShowPostPage}>
        <h3 className='post-title'>{post.title}</h3>
        <p className='post-date'>{post.date}</p>
        <div className='post-content'>
          <p>{post.content}</p>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
  );
}

export default ShowPostPage;