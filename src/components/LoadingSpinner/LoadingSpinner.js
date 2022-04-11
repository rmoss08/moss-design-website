import styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <div className={styles['loading-bars']}>
      <div className={`${styles.bar} ${styles.animation}`}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
    </div>
  );
};

export default LoadingSpinner;
