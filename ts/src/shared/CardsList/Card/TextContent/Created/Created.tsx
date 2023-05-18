import React from 'react';
import styles from './created.css';

export function Created() {
  return (
    <span className={styles.createdAt}>
      <span className={styles.publishedLabel}>опубликовано </span>
      2 часа назад
    </span>
  );
}
