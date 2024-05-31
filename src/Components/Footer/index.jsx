import { CiPhone, CiMail } from "react-icons/ci";
import styles from "./style.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_info}>Aibekbbic designs</div>
        <div className={styles.footer_links}>
          {" "}
          <a className={styles.link} target="_blank" href="+393388322827">
            <CiPhone />
          </a>
          <a className={styles.link} target="_blank" href="baione@gmail.com">
            <CiMail />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
