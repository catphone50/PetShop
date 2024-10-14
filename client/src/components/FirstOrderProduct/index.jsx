import styles from "./styles.module.css";
import { useForm } from "react-hook-form";
import petsImg from "../../assets/img/FirstOrderImg.jpg";
import axios from "axios";
import { GENERAL_URL } from "../../config/apiConstants";
import Form from "../Form";

const FirstOrderDiscount = () => {
  const onSubmit = async (data) => {
    const response = await axios.post(`${GENERAL_URL}/sale/send`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <section className={styles.firstOrderSectionContainer}>
      <div className={styles.firstOrderContainer}>
        <h3 className={styles.titleOrder}>5% off on the first order</h3>
        <div className={styles.firstOrderContentContainer}>
          <img className={styles.imgOrder} src={petsImg} alt="pets" />
          <Form onSubmit={onSubmit} />
        </div>
      </div>
    </section>
  );
};

export default FirstOrderDiscount;
