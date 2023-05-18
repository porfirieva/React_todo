import React from 'react';
import styles from './textcontent.css';
import { UserInfo } from "./UserInfo";
import { Created } from "./Created";
import { Title } from "./Title";

export function TextContent() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <UserInfo />
        <Created />
      </div>
      <Title />
    </div>
  );
}
