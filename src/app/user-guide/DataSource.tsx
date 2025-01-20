import React, { useState } from 'react';
import DataContent from './DataContent'; // Import the separate content display component
import styles from './DataSource.module.css';

const DataDisplay: React.FC = () => {
  // State to track the selected item
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  return (
    <div className={styles.container}>
      <h1>1. Data Sources : </h1>
      <div className={styles.section}>
        <p>a. Markets Considered</p>
        <ul className={styles.lis}>
            <li className={styles.listItem}>Nielsen (Total US xAOC + Convenience). Only Nielsen data since 01-Jan-2021 is considered and this data is refreshed on a weekly basis</li>
        </ul>
        <p></p>
      </div>
      <div className={styles.section}>
        <p>b. Primary Fields of Interest</p>
        <div className={styles.flexContainer}>
          <ul className={styles.list}>
            <div className={styles.listItem}>
            {['Mega-category', 'Category', 'Sub-category', 'Brand', 'Sub-brand', 'PPG', 'Product name', 'Manufacturer'].map((item) => (
              <li
                key={item}
                onClick={() => setSelectedItem(item)}
                // className={styles.listItem}
              >
                {item}
              </li>
            ))}
            </div>
          </ul>
  
          {/* Show content only when an item is clicked */}
          {selectedItem && (
            <DataContent selectedItem={selectedItem} />
          )}
        </div>
        <br />
        <em className={styles.em}>You can view examples of valid values for each primary field of interest by clicking on the corresponding field.</em>
      </div>
    </div>
  );
};

export default DataDisplay;
