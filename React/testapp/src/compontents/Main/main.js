import React from 'react';
import Article from '../Article/Article'

import styles from './main.module.scss';




function Main() {
  return (
      <div className={styles.articleWrapper}>
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
  )
}

export default Main;