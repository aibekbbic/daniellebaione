import { TfiYoutube, TfiInstagram, TfiFacebook } from "react-icons/tfi";
import styles from "./style.module.scss";

const Links = () => {
  return (
    <div className={styles.links}>
      <a className={styles.link} target="_blank" href="www.instagram.com">
        <TfiInstagram />
      </a>
      <a className={styles.link} target="_blank" href="www.facebook.com">
        <TfiFacebook />
      </a>
      <a className={styles.link} target="_blank" href="www.youtube.com">
        <TfiYoutube />
      </a>
    </div>
  );
};

export default Links;
