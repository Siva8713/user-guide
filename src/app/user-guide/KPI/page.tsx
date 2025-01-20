import HeaderTitle from '@/components/HeaderTitle/HeaderTitle.component';
import Header from '../components/header';
import SalesAndUnits from './components/SalesAndUnits';
import styles from './components/SalesAndUnits.module.css';


const keyDrivers = () => {
  return (
    <div>
      <HeaderTitle title={'Snack gpt User - Guide'} />
      <main className={styles.page}>
        <SalesAndUnits />
      </main>
    </div>
  );
};

export default keyDrivers;
