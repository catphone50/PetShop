import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import NFP from "../../assets/img/404.png";

const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <img className={styles.img} src={NFP} alt="Not found Page" />
      <h3 className={styles.title}>Page Not Found</h3>
      <p className={styles.info}>
        We’re sorry, the page you requested could not be found. Please go back
        to the homepage.
      </p>
      <Link to="/" className={styles.homeLink}>
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
