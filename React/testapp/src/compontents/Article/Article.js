import React from 'react';



import styles from './Article.module.scss'

function Article() {
  return (

      
      <div className={styles.content}>
        <img src="https://icdn2.digitaltrends.com/image/digitaltrends/space-debris-junk-hero.jpg" alt='space' className={styles.image}></img>
        <h4 className={styles.city}>Iasi</h4>
        <p className={styles.description}>Description of city</p>
      </div>
  )
}


export default Article;