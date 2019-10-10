import React from 'react';
import styles from './ShowPostPage.module.css';

function ShowPostPage (...props) {
  console.log('show post', props)
  return(
      <div className={styles.ShowPostPage}>
        <h3 className='post-title'>{props.title}</h3>
        <p className='post-date'>{props.date}</p>
        <div className='post-content'>
          <p>{props.content}</p>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
  );
}

export default ShowPostPage;