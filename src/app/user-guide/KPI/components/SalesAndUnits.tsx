'use client'
import React, { useState } from 'react';
import MetricDetails from './MetricDetails';
import metricData, { MetricData } from '../../components/data';  // Import MetricData type
import styles from './SalesAndUnits.module.css';

const SalesAndUnits: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);

  const handleClick = (metric: string) => {
    setSelectedMetric((prev) => (prev === metric ? null : metric));
  };

  
  const renderMetricDetails = (metric: string) => {
    const data: MetricData | undefined = metricData[metric];  
    if (data) {
      return (
        <MetricDetails
          unit={data.unit}
          definition={data.definition}
          formula={data.formula}
          sqlFormula={data.sql_formula}
        />
      );
    }
    return null;
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>2. Key Performance Indicators (KPIs)</h1>
    
    <div className={styles.container}>
      <ul className={styles.list}>
      
      <em>Click on the below KPIs to get some detailed information</em>
      <br />
        <li>
          <h2 className={selectedMetric === 'sales' ? styles.selectedText : ''} onClick={() => handleClick('sales')}>a. Sales in Dollars </h2>
          {selectedMetric === 'sales' && renderMetricDetails('sales')}
          

          <h2 className={selectedMetric === 'units' ? styles.selectedText : ''} onClick={() => handleClick('units')}>b. Sales in Units </h2>
          {selectedMetric === 'units' && renderMetricDetails('units')}
          

          <h2>c. Market Share in Terms of Sales Dollars or Sales Units</h2>
          

          <h2>d. Velocity</h2>
          

          <h2 className={selectedMetric === 'average_retail_price' ? styles.selectedText : ''} onClick={() => handleClick('average_retail_price')}>e. Average Retail Price </h2>
          {selectedMetric === 'average_retail_price' && renderMetricDetails('average_retail_price')}
          
          <ul className={`${styles.list} ${styles.sublist}`}>
            <li className={selectedMetric === 'non_promoted_retail_price' ? styles.selectedText : ''} onClick={() => handleClick('non_promoted_retail_price')}>
              1. Non-promoted Retail Price 
              {selectedMetric === 'non_promoted_retail_price' && renderMetricDetails('non_promoted_retail_price')}
            </li>
            <li className={selectedMetric === 'discount_depth' ? styles.selectedText : ''} onClick={() => handleClick('discount_depth')}>
              2. Discount Depth 
              {selectedMetric === 'discount_depth' && renderMetricDetails('discount_depth')}
            </li>
            <li className={selectedMetric === 'promo_units' ? styles.selectedText : ''} onClick={() => handleClick('promo_units')}>
              3. Promo Units 
              {selectedMetric === 'promo_units' && renderMetricDetails('promo_units')}
            </li>
            <li>
              <ul className={`${styles.list} ${styles.sublist}`}>
                <li className={selectedMetric === 'promo_units_with_FD' ? styles.selectedText : ''} onClick={() => handleClick('promo_units_with_FD')}>
                  i. Promo Units with Feature or Display 
                  {selectedMetric === 'promo_units_with_FD' && renderMetricDetails('promo_units_with_FD')}
                </li>
                <li className={selectedMetric === 'promo_units_with_only_D' ? styles.selectedText : ''} onClick={() => handleClick('promo_units_with_only_D')}>
                  ii. Promo Units with only Display 
                  {selectedMetric === 'promo_units_with_only_D' && renderMetricDetails('promo_units_with_only_D')}
                </li>
                <li className={selectedMetric === 'promo_units_with_only_F' ? styles.selectedText : ''} onClick={() => handleClick('promo_units_with_only_F')}>
                  iii. Promo Units with Only Features 
                  {selectedMetric === 'promo_units_with_only_F' && renderMetricDetails('promo_units_with_only_F')}
                </li>
                <li className={selectedMetric === 'promo_units_with_price_decrease' ? styles.selectedText : ''} onClick={() => handleClick('promo_units_with_price_decrease')}>
                  iv. Promo Units with Price Decrease 
                  {selectedMetric === 'promo_units_with_price_decrease' && renderMetricDetails('promo_units_with_price_decrease')}
                </li>
              </ul>
            </li>
            
          </ul>
          

          <h2 className={selectedMetric === 'weekly_velocity' ? styles.selectedText : ''} onClick={() => handleClick('weekly_velocity')}>f. Weekly Velocity </h2>
          {selectedMetric === 'weekly_velocity' && renderMetricDetails('weekly_velocity')}
          <ul className={`${styles.list} ${styles.sublist}`}>
            <li className={selectedMetric === 'non_promo_velocity' ? styles.selectedText : ''} onClick={() => handleClick('non_promo_velocity')}>
              1. Non-promo Velocity 
              {selectedMetric === 'non_promo_velocity' && renderMetricDetails('non_promo_velocity')}
            </li>
            <li className={selectedMetric === 'promo_tdps' ? styles.selectedText : ''} onClick={() => handleClick('promo_tdps')}>
              2. Promo TDPS 
              {selectedMetric === 'promo_tdps' && renderMetricDetails('promo_tdps')}
            </li>
            <li className={selectedMetric === 'promo_velocity' ? styles.selectedText : ''} onClick={() => handleClick('promo_velocity')}>
              3. Promo Velocity 
              {selectedMetric === 'promo_velocity' && renderMetricDetails('promo_velocity')}
              </li>
              <li>
              <ul className={`${styles.list} ${styles.sublist}`}>
                <li className={selectedMetric === 'promo_velocity_with_FD' ? styles.selectedText : ''} onClick={() => handleClick('promo_velocity_with_FD')}>
                  i. Promo Velocity with Feature or Display 
                  {selectedMetric === 'promo_velocity_with_FD' && renderMetricDetails('promo_velocity_with_FD')}
                </li>
                <li className={selectedMetric === 'promo_velocity_with_only_D' ? styles.selectedText : ''} onClick={() => handleClick('promo_velocity_with_only_D')}>
                  ii. Promo Velocity with Only Display 
                  {selectedMetric === 'promo_velocity_with_only_D' && renderMetricDetails('promo_velocity_with_only_D')}
                </li>
                <li className={selectedMetric === 'promo_velocity_with_only_F' ? styles.selectedText : ''} onClick={() => handleClick('promo_velocity_with_only_F')}>
                  iii. Promo Velocity with Only Features 
                  {selectedMetric === 'promo_velocity_with_only_F' && renderMetricDetails('promo_velocity_with_only_F')}
                </li>
                <li className={selectedMetric === 'promo_velocity_with_price_decrease' ? styles.selectedText : ''} onClick={() => handleClick('promo_velocity_with_price_decrease')}>
                  iv. Promo Velocity with Price Decrease 
                  {selectedMetric === 'promo_velocity_with_price_decrease' && renderMetricDetails('promo_velocity_with_price_decrease')}
                </li>
              </ul>
              </li>
           
          </ul>  
          

          <h2 className={selectedMetric === 'distribution' ? styles.selectedText : ''} onClick={() => handleClick('distribution')}>g. Distribution </h2>
          {selectedMetric === 'distribution' && renderMetricDetails('distribution')}
        </li>
      </ul>
    </div>
    </div>
  );
};

export default SalesAndUnits;
