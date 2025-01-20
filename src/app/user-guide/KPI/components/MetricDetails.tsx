import React from 'react';
import styles from './MetricDetails.module.css';

interface MetricProps {
  unit: string;
  definition: string;
  formula: string;
  sqlFormula: string;
}

const MetricDetails: React.FC<MetricProps> = ({ unit, definition, formula, sqlFormula }) => {
  return (
    <div className={styles.metricContainer}>
      <p><strong>Unit:</strong> {unit}</p>
      <p><strong>Definition:</strong> {definition}</p>
      {formula && <p><strong>Formula:</strong> {formula}</p>}
      <p><strong>SQL Formula:</strong> {sqlFormula}</p>
    </div>
  );
};

export default MetricDetails;
