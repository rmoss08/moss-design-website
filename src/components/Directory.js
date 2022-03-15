import styles from './Directory.module.css';

const Directory = () => {
    return (
        <ul className={styles.directory}>
            <li>ABOUT</li>
            <li>PROJECTS</li>
            <li>CONTACT</li>
        </ul>
    );
};

export default Directory;