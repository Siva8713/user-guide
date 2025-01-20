import React from 'react';
import styles from './DataSource.module.css';

interface DataContentProps {
  selectedItem: string;
}

const DataContent: React.FC<DataContentProps> = ({ selectedItem }) => {
  const getContent = (item: string) => {
    switch (item) {
      case 'Mega-category':
        return (
          <ul>
            <li>TOTAL BARS</li>
            <li>CONFECTIONARY</li>
            <li>COUGH PROTECTION/RELIEF</li>
            <li>BISCUITS</li>
          </ul>
        );
      case 'Category':
        return (
          <ul>
            <li>COOKIE</li>
            <li>TOTAL BARS</li>
            <li>CRACKER</li>
            <li>NON CHOCOLATE</li>
            <li>COUGH DROP</li>
          </ul>
        );
      case 'Sub-category':
        return (
          <ul>
            <li>CRK-BUTTER</li>
            <li>COUGH DROP</li>
            <li>CKY-FUN SHAPE</li>
            <li>CKY-GRAHAMS</li>
            <li>CKY-SUGAR WAFER</li>
            <li>CKY-VANILLA WAFER</li>
            <li>BETTER FOR YOU</li>
          </ul>
        );
      case 'Brand':
        return (
          <ul>
            <li>PF GOLDFISH</li>
            <li>GAMESA</li>
            <li>FRANKFORD</li>
            <li>GLUTINO</li>
            <li>SWEET'S</li>
            <li>LA ESTRELLA</li>
            <li>TRHSFODS AO BRNDS</li>
          </ul>
        );
      case 'Sub-brand':
        return (
          <ul>
            <li>PF DIST COLL PIROUETTE</li>
            <li>FRANKFORD</li>
            <li>TROLLI SOUR CRUNCHY CRAWLERS</li>
            <li>NAB CKN IN A BSK ORIGINAL</li>
            <li>GLUTINO</li>
            <li>SWEET'S</li>
            <li>MARINELA TRIKI-TRAKES</li>
          </ul>
        );
      case 'PPG':
        return (
          <ul>
            <li>HALL BASE BONUS BAG</li>
            <li>HARIBO SMALL PEG =4OZ</li>
            <li>NAB HANDI SNACKS MUP 15CT PPG</li>
            <li>NAB CAKESTERS BASE PPG</li>
            <li>WONKA LAFFY TAFFY VARIETY PACK 49.3OZ</li>
            <li>NAB SOCIAL TEA BASE PPG</li>
            <li>MARS SMALL SUB 11.2-15.6OZ</li>
          </ul>
        );
      case 'Product name':
        return (
          <ul>
            <li>NABISCO OREO COOKIE SANDWICH CREAM TRAY IN BAG 18.12 OUNCE</li>
            <li>NABISCO OREO DOUBLE STUF COOKIE SANDWICH CREAM TRAY IN BAG 18.71 OUNCE</li>
            <li>NABISCO RITZ CRACKER ORIGINAL BAG IN BOX 11.8 OUNCE</li>
            <li>NABISCO PREMIUM CRACKER SALTINE BAG IN BOX 16 OUNCE</li>
            <li>NABISCO RITZ CRACKER ORIGINAL BOX 13.7 OUNCE</li>
            <li>NABISCO HONEY MAID CRACKER HONEY GRAHAM BAG IN BOX 14.4 OUNCE</li>
            <li>CHEEZ-IT CRACKER ORIGINAL SNACK BAG IN BOX 21 OUNCE</li>
          </ul>
        );
      case 'Manufacturer':
        return (
          <ul>
            <li>FRANKFORD</li>
            <li>GIMBAL'S</li>
            <li>WEDDERSPOON</li>
            <li>WALKSHRT</li>
            <li>CONAGRA</li>
            <li>INTERSTATE BAKERIES</li>
            <li>GRUPBIMB</li>
          </ul>
        );
      default:
        return <p>No content available for this selection.</p>;
    }
  };

  return (
    <div className={styles.content}>
      <h4>Examples of {selectedItem}</h4>
      {getContent(selectedItem)}
    </div>
  );
};

export default DataContent;
