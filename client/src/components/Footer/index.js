import Contact from "../Contact";
import styles from "./styles.module.css";
import Iframe from "react-iframe";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <Contact />
      <Iframe
        className={styles.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d621714.0725833462!2d12.76542453083831!3d52.50501211332297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2z0JHQtdGA0LvQuNC9!5e0!3m2!1sru!2sde!4v1728252419493!5m2!1sru!2sde"
        width="1300"
        height="350"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></Iframe>
    </footer>
  );
};

export default Footer;
