import styles from './HeaderTitle.module.css'
export default function HeaderTitle({ title }: { title: string }) {
  return <h1 className={styles.headingLarge }>{title}</h1>;
}
