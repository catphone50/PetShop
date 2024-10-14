import styles from "./styles.module.css";
import Title from "../../components/Title";
import Cart from "../../components/Cart";
import Form from "../../components/Form";
import { GENERAL_URL } from "../../config/apiConstants";
import ProductQuantityControl from "../../components/ProductQuantityControl";
import PriceDisplay from "../../components/PriceDisplay";
import deleteItem from "../../assets/icons/x.svg";
import axios from "axios";
import { useSelector } from "react-redux";

const CartPage = () => {
  const items = useSelector((state) => {
    return state.cart;
  });

  const countTotalPrice = () => {
    return items
      .reduce((total, item) => {
        return total + (item.discont_price || item.price) * item.quantity;
      }, 0)
      .toFixed(2);
  };

  const onSubmit = async (data) => {
    const response = await axios.post(`${GENERAL_URL}/order/send`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
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
                <div key={item.id} className={styles.productContainer}>
                  <img
                    className={styles.img}
                    src={`${GENERAL_URL}${item.image}`}
                    alt={item.title}
                  />
                  <div className={styles.productInfoContainer}>
                    <div className={styles.titleContainer}>
                      <h5>{item.title}</h5>
                      <button className={styles.delete}>
                        <img src={deleteItem} alt="del" />
                      </button>
                    </div>
                    <div className={styles.priceContainer}>
                      <ProductQuantityControl quantity={item.quantity} />
                      <PriceDisplay
                        price={item.price}
                        discountPrice={item.discont_price}
                        fontSizeDiscount="40px"
                        fontSizePrice="20px"
                        className={styles.price}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.orderDetailsContainer}>
              <h5>Order details</h5>
              <div className={styles.infoTotalContainer}>
                <p
                  className={styles.totalItems}
                >{`${items.length} items Total`}</p>
                <p className={styles.totalPrice}>{`$${countTotalPrice()}`}</p>
              </div>
              <Form onSubmit={onSubmit} />
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
    </div>
  );
};

export default CartPage;
