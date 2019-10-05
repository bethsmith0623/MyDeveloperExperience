import React from 'react';
import styles from './MainPage.module.css';
import BlogPost from '../BlogPostPage/BlogPostPage';

function Main() {
    return (
        <div className={styles.Main}>
            Main Body
            <BlogPost />
            <BlogPost />
            <BlogPost />
        </div>
    )
};

export default Main;