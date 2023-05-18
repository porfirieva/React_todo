import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img className={styles.previewImg} src="https://creativo.one/lessons/les1003/3.jpg" alt="preview" />
    </div>
  );
}
