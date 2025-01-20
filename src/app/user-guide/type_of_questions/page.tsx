import React from 'react';
import styles from './page.module.css';
import Header from '../components/header';
import HeaderTitle from '@/components/HeaderTitle/HeaderTitle.component';

const QuestionsAnswered: React.FC = () => {
  return (
    <>
    <HeaderTitle title={'Snack gpt User - Guide'} />
    <div className={styles.page}>
    <h1 className={styles.heading}>3. Questions Answered by SnackGPT</h1>
      <div className={styles.container}>
        <br />
        <div className={styles.kpiSection}>
          <h2>a. "What" question for extracting data corresponding to a KPI of interest for a specific level of product hierarchy</h2>
        </div>

        <div className={styles.kpiSection}>
          <h2>b. "Key driver" question for understanding the performance of a brand or subcategory</h2>
          <p>Further, the performance of the brand (or subcategory) of interest is compared against the appropriate subcategory (or category)</p>
        </div>

        <div className={styles.kpiSection}>
          <h2>c. "Summary" question for understanding the performance of a brand/subcategory in terms of:</h2>
          <ul className={styles.list}>
            <li>i. change in market share w.r.t. last year</li>
            <li>ii. key drivers for change in market share</li>
            <li>iii. competitor performance where the competitors are identified at an appropriate level of hierarchy. For example, to answer a summary question at the brand level, the competitors are identified at the next level product hierarchy, namely, subcategory.</li>
            <li>iv. regional breakdown for the brand/subcategory</li>
          </ul>
        </div>

        <div className={styles.kpiSection}>
          <h2>d. "Why" question for understanding a change in performance using a combination of machine learning models and unstructured data.</h2>
          <p>Unstructured data corresponds to PDFs and PPTs shared by the ARISE team e.g., Kantar US retail outlook.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default QuestionsAnswered;
