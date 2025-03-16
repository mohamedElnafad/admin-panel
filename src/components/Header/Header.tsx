import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className='container-fluid d-flex flex-row-reverse gap-3 align-items-center p-3'>
        <h2>LOGO</h2>
        <div className={styles.userInfo}>
          <span>مرحبا عبد الله</span>
          <img
            src='user-avatar.png'
            alt='User Avatar'
            className={styles.avatar}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
