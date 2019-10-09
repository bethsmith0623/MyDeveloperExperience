import React from 'react';
import styles from './SideBar.module.css';

function SideBar() {
  return(
    <div className={styles.SideBar}>
      <p className={styles.Intro}>Web developer and lover of all things geek.</p>
      <a className={styles.Headshot} href="https://imgur.com/C4vdbXh"><img src="https://i.imgur.com/C4vdbXhb.jpg" title="Headshot" alt="Beth"/></a>
      <div className={styles.Links}>
        Follow Beth on:
        <br/>
          <a href="https://twitter.com/bethsmith0623?ref_src=twsrc%5Etfw" className="twitter" data-show-count="false" target="_blank">Twitter</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script> 
          &nbsp; &nbsp; 
          <a href="https://www.instagram.com/bethsmith0623/" className="instagram" target="_blank">Instagram</a>
          &nbsp; &nbsp; 
          <a href="https://www.linkedin.com/in/bethsmith0623/" className="linkedin" target="_blank">LinkedIn</a>
      </div>
      <div className={styles.Quote}>
        <h5>Quote for the Week</h5>
        <a href="https://imgur.com/62A3sSc"><img src="https://i.imgur.com/62A3sScb.png?2" title="source: imgur.com" /></a>
      </div>
    </div>
  )
}

export default SideBar;