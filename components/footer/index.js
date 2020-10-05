import styles from './Footer.module.css';

const Footer = ({ width }) => {
  return (
    <>
      <div className={styles.footer} style={{ width: width }}>
        <small className={styles.text}>EntwistleOx</small>
        <small className={styles.text}>Authentication App</small>
      </div>
    </>
  );
};

export default Footer;
