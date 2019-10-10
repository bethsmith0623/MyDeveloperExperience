import React from 'react';
import styles from './ShowPostPage.module.css';
import EditPostPage from '../EditPostPage/EditPostPage';

function ShowPost(props) {
  console.log('show post', props)
  return(
    <>
      <div className={styles.ShowPost}>
        {/* {props.post.} */}
        <h3 className='post-title'>{props.title}</h3>
        <p className='post-date'>{props.date}</p>
        <div className='post-content'>
          <p>{props.content}</p>
        </div>
      </div>
    </>
  );
}

export default ShowPost;