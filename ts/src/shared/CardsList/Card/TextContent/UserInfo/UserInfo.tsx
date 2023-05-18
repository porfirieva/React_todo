import React from 'react';
import styles from './userinfo.css';

export function UserInfo() {
  return (
    <div className={styles.userLink}>
      <img src="https://pibig.info/uploads/posts/2022-11/1668750468_4-pibig-info-p-kotik-na-belom-fone-instagram-6.jpg" alt="avatar" className={styles.avatar} />
      <a href="#user-url" className={styles.username}>Porfirieva Ksenia</a>
    </div>
  );
}
