import React from 'react';
import styles from './Main.module.css';
import BlogPost from '../BlogPost/BlogPost';

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