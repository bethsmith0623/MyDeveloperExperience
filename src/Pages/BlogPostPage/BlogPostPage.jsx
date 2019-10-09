import React from 'react';
import styles from './BlogPostPage.module.css';
import EditPostPage from '../EditPostPage/EditPostPage';

function BlogPost(props) {
  return(
    <>
      <div className={styles.BlogPost}>
        {/* <h3 className='post-title'>{props.post.name}</h3>
        <p className='post-date'>{props.post.date}</p> */}
        <hr/>
        <div className='post-content'>
          <p>{props.content}</p>
        </div>
      </div>
    </>
  );
}

export default BlogPost;