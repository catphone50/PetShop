import styles from "./styles.module.css";
import Title from "../../components/Title";
import Cart from "../../components/Cart";
import Form from "../../components/Form";
import { GENERAL_URL } from "../../config/apiConstants";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";
import Modal from "../../components/Modal";

const CartPage = () => {
  const items = useSelector((state) => {
    return state.cart;
  });

  const [successful, setSuccessful] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);

  const onSubmit = async (data) => {
    const response = await axios.post(`${GENERAL_URL}/order/send`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.request.status === 200) {
      setSuccessful("The Order is Placed");
      setIsModalOpen(true);
    }
  };

  const countTotalPrice = (state) => {
    return state
      .reduce((total, item) => {
        return total + (item.discont_price || item.price) * item.quantity;
      }, 0)
      .toFixed(2);
  };

  return (
    <div className={styles.cartPageContainer}>
      <Title
        title="Shopping cart"
        link="/allProducts"
        linkName="Back to the store"
      />
      <div className={styles.infoContainer}>
        {items?.length > 0 ? (
          <div className={styles.productsWrapper}>
            <div className={styles.productsContainer}>
              {items.map((item) => (
                <Cart key={item.id} product={item} />
              ))}
            </div>
            <div className={styles.orderDetailsContainer}>
              <h5>Order details</h5>
              <div className={styles.infoTotalContainer}>
                <p
                  className={styles.totalItems}
                >{`${items.length} items Total`}</p>
                <p className={styles.totalPrice}>{`$${countTotalPrice(
                  items
                )}`}</p>
              </div>
              <Form
                className={styles.orderForm}
                onSubmit={onSubmit}
                successful={successful}
              />
            </div>
          </div>
        ) : (
          <div className={styles.emptyCartMessage}>
            <p>Looks like you have no items in your basket currently.</p>
            <a href="/allProducts" className={styles.accentButton}>
              Continue Shopping
            </a>
          </div>
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default CartPage;
