'use client'
import React, { ReactNode } from 'react';
import styles from './layout.module.css';
import NavBar from './components/NavBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
      <>
      <NavBar />
      <div className={styles.mainContent} >{children}</div>
      </>
  );
};

export default Layout;
