import React from 'react';
import styles from './SideBar.module.css';

function SideBar() {
    return(
        <div className={styles.SideBar}>
            <p className={styles.Intro}>Web developer and lover of all things geek.</p>
            <a className={styles.Headshot} href="https://imgur.com/C4vdbXh"><img src="https://i.imgur.com/C4vdbXhb.jpg" title="Headshot" /></a>
            <div className={styles.Links}>
                <a href="https://twitter.com/bethsmith0623?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @bethsmith0623</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
            </div>
            <div className={styles.Quotes}>Quotes API</div>
            <div className={styles.TagList}>Tag List</div>
        </div>
    )
}

export default SideBar;