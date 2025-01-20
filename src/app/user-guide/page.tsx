'use client';

import DataDisplay from './DataSource';
import HeaderTitle from '@/components/HeaderTitle/HeaderTitle.component';
import { Suspense } from 'react';
import styles from './page.module.css'; // Import the new CSS module
import NavBar from './components/NavBar';

export default function UserGuidePage() {
  return (
    <>
      {/* Use the new header container class to offset it for this page */}
      <NavBar />
      <div className={styles.mainContent}>
      <HeaderTitle title={'Snack gpt User - Guide'} />
      <Suspense fallback={null}>
        <DataDisplay />
      </Suspense>
      </div>
      </>
  );
}
