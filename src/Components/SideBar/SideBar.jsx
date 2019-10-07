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
            <h4 className={styles.Headshot}>
            <a href="https://imgur.com/C4vdbXh"><img src="https://i.imgur.com/C4vdbXhb.jpg" title="source: imgur.com" /></a></h4>
            <div className={styles.Links}>
                <a href="https://twitter.com/bethsmith0623?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @bethsmith0623</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
            </div>
            <div className={styles.Quotes}>Quotes API</div>
            <div className={styles.TagList}>Tag List</div>
        </div>
    )
}

export default SideBar;