import React from 'react';
import styles from './BlogPostPage.module.css';
import EditPostPage from '../EditPostPage/EditPostPage';

function BlogPostAdmin(props) {
  const {handleDeletePost, handleUpdatePost} = props
  return(
    <>
      <div className={styles.BlogPost}>
        <h3 className='post-title'>{props.name}</h3>
        <p className='post-date'>{props.date}</p>
        <hr/>
        <div className='post-content'>
          <p>{props.content}</p>
        </div>
      </div>
      <EditPostPage
            history={props.history}
            handleDeletePost={handleDeletePost}
            handleUpdatePost={handleUpdatePost}
            location={props.location}
          />
    </>
  );
}

export default BlogPostAdmin;