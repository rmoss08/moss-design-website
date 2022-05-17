import styles from './ConnectLink.module.css';

const ConnectLink = () => {
  return (
    <a className={styles['connect-link']} href="mailto:john.smith@gmail.com">
      <h4>CONNECT</h4>
    </a>
  );
};

export default ConnectLink;
