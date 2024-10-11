import styles from "./styles.module.css";
import instagram from "../../assets/icons/ic-instagram.svg";
import wa from "../../assets/icons/ic-whatsapp.svg";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.title}>Contact</h2>
      <div className={styles.contactItemContainer}>
        <div className={styles.elementContainer}>
          <h6 className={styles.titleElement}>Phone</h6>
          <p className={styles.infoContact}>+49 30 915-88492</p>
        </div>

        <div className={styles.elementContainer}>
          <h6 className={styles.titleElement}>Socials</h6>
          <div className={styles.socialsIconContainer}>
            <img src={instagram} alt="insta" />
            <img src={wa} alt="wa" />
          </div>
        </div>
        <div className={styles.elementContainer}>
          <h6 className={styles.titleElement}>Address</h6>
          <p className={styles.infoContact}>
            Wallstraẞe 9-13, 10179 Berlin, Deutschland
          </p>
        </div>
        <div className={styles.elementContainer}>
          <h6 className={styles.titleElement}>Working Hours</h6>
          <p className={styles.infoContact}>24 hours a day</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
