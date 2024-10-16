import styles from "./styles.module.css";
import deleteItem from "../../assets/icons/close.svg";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.titleContainer}>
          <h4>Congratulations! </h4>
          <button className={styles.closeButton} onClick={onClose}>
            <img src={deleteItem} alt="del" />
          </button>
        </div>
        <p>Your order has been successfully placed on the website.</p>
        <p>A manager will contact you shortly to confirm your order.</p>
      </div>
    </div>
  );
};

export default Modal;
