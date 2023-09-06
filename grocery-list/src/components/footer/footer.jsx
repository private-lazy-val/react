import styles from './footer.module.css';

const Footer = ({length}) => {
    return (
        <footer className={styles.footer}>
            <p>{length} List {length === 1 ? "item" : "items"}</p>
        </footer>
    );
};

export default Footer;