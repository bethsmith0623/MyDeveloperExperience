import React from 'react';
import styles from './AdminPage.module.css';

function AdminPage() {
    return(
      <>
        <h2>List of current posts</h2>  
        <form action="POST">
          <input type="text" value="Title"/>
          <input type="date" value="Date"/>
          <input type="text" value="Content"/>
          <input type="text" value="Tags"/>
        </form>
      </>
    )
}

export default AdminPage;