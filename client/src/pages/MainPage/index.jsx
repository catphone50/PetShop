import styles from "./styles.module.css";
import CategoriesList from "../../components/CategoriesList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../../redux/slices/categoriesSlice";
import { fetchProducts } from "../../redux/slices/productsSlice";
import Title from "../../components/Title";
import ProductsList from "../../components/ProductsList";
import FirstOrderDiscount from "../../components/FirstOrderProduct";
import { LinearProgress } from "@mui/material";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  const categories = useSelector((state) => {
    return state.categories.data;
  });

  const isLoadingCategories = useSelector((state) => {
    return state.categories.isLoading;
  });

  const isLoadingProducts = useSelector((state) => {
    return state.products.isLoading;
  });

  const products = useSelector((state) => state.products.data);

  const filteredProducts = products.filter(
    (product) => product.discont_price !== null
  );

  return (
    <div className={styles.mainContainer}>
      <section className={styles.discountContainer}>
        <h2 className={styles.title}>Amazing Discounts on Pets Products!</h2>
        <a href="/sale" className={styles.accentButton}>
          Check out
        </a>
      </section>

      <section className={styles.categoriesContainer}>
        {isLoadingCategories ? (
          <LinearProgress />
        ) : (
          <CategoriesList
            categories={categories.slice(0, 4)}
            link="/categories"
          />
        )}
      </section>
      <FirstOrderDiscount />
      <section className={styles.saleSection}>
        <Title title="Sale" link="/sale" />
        {isLoadingProducts ? (
          <LinearProgress />
        ) : (
          <ProductsList products={filteredProducts.slice(0, 4)} />
        )}
      </section>
    </div>
  );
};

export default Main;
