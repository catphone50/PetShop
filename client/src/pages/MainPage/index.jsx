import styles from "./styles.module.css";
import { useForm } from "react-hook-form";
import petsImg from "../../assets/img/FirstOrderImg.jpg";
import Categories from "../../components/Categories";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../../redux/slices/categoriesSlice";
import { fetchProducts } from "../../redux/slices/productsSlice";
import Title from "../../components/Tittle";
import Product from "../../components/Product";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  const categories = useSelector((state) => {
    return state.categories.data;
  });

  const products = useSelector((state) => state.products.data);

  const filteredProducts = products.filter(
    (product) => product.discont_price !== null
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className={styles.mainContainer}>
      <section className={styles.discountContainer}>
        <h2 className={styles.title}>Amazing Discounts on Pets Products!</h2>
        <button className={styles.accentButton}>Check out</button>
      </section>

      <section className={styles.categoriesContainer}>
        <Categories categories={categories.slice(0, 4)} link="/categories" />
      </section>
      <section className={styles.firstOrderSectionContainer}>
        <div className={styles.firstOrderContainer}>
          <h3 className={styles.titleOrder}>5% off on the first order</h3>
          <div className={styles.firstOrderContentContainer}>
            <img className={styles.imgOrder} src={petsImg} alt="pets" />
            <form
              className={styles.formContainer}
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                className={styles.inputOrder}
                type="text"
                placeholder="Name"
                {...register("firstName", {
                  required: true,
                  min: 1,
                  maxLength: 80,
                })}
              />
              <input
                className={styles.inputOrder}
                type="tel"
                placeholder="Phone number"
                {...register("number", {
                  required: true,
                  minLength: 6,
                  maxLength: 12,
                })}
              />
              <input
                className={styles.inputOrder}
                type="text"
                placeholder="Email"
                {...register("Email", {
                  required: true,
                  min: 1,
                  pattern: /^\S+@\S+$/i,
                })}
              />

              <button className={styles.secondaryButton} type="submit">
                Check out
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className={styles.saleSection}>
        <Title title="Sale" link="/sale" />
        <Product products={filteredProducts.slice(0, 4)} />
      </section>
    </div>
  );
};

export default Main;
