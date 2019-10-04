import React from 'react';
import styles from './SideBar.module.css';

function SideBar() {
    return(
        <div className={styles.SideBar}>
            SideBar
            <h4 className={styles.Intro}>Intro</h4>
            <div className={styles.SideButton}>
                <button>Contact</button>
                <button>About</button>
            </div>
            <h4 className={styles.Headshot}>Headshot Image</h4>
            <div className={styles.Links}>
                <button>TW</button> 
                <button>LI</button> 
                <button>IG</button> 
                <button>GH</button> 
            </div>
            <div className={styles.Quotes}>Quotes API</div>
            <div className={styles.TagList}>Tag List</div>
        </div>
    )
}

export default SideBar;