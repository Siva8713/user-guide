
import React, { useState, useEffect } from 'react';
import styles from './NavBar.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar: React.FC = () => {
  const pathname = usePathname(); // Get the current path using usePathname

  return (
    <div className={styles.navBar}>
      <h1>Table Of Contents:</h1>
      <ul className={styles.navList}>
        <li>
          <Link
            href="/user-guide"
            className={pathname === '/user-guide' ? styles.active : ''}
          >
            1. Data Sources
          </Link>
        </li>
        <li>
          <Link
            href="/user-guide/KPI"
            className={pathname === '/user-guide/KPI' ? styles.active : ''}
          >
            2. KPIs
          </Link>
        </li>
        <li>
          <Link
            href="/user-guide/type_of_questions"
            className={pathname === '/user-guide/type_of_questions' ? styles.active : ''}
          >
            3. Types Of Questions
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
