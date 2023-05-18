import React from 'react';
import styles from './title.css';

export function Title() {
  return (
    <h2 className={styles.title}>
      <a href="#post-url" className={styles.postLink}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat doloribus eligendi illo id enim deserunt voluptatibus voluptate, repellendus,
      </a>
    </h2>
  );
}
