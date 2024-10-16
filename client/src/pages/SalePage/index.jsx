import { useDispatch, useSelector } from "react-redux";
import Title from "../../components/Title";
import { useEffect } from "react";
import Navigate from "../../components/Navigate";
import { fetchProducts } from "../../redux/slices/productsSlice";
import ProductsList from "../../components/ProductsList";
import styles from "./styles.module.css";
import FilterProduct from "../../components/FilterProduct";

const SalePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.products.data);

  const filteredDiscountProducts = products.filter(
    (product) => product.discont_price !== null
  );

  const filteredProducts = useSelector(
    (state) => state.filter.filteredProducts
  );

  return (
    <>
      <Navigate
        way={[
          { title: "Main Page", link: "/" },
          { title: "All sale", link: "/sale" },
        ]}
      />
      <Title className={styles.title} title="Discounted items" />
      <FilterProduct isSalePage products={filteredDiscountProducts} />
      <ProductsList
        products={
          filteredProducts.length > 0
            ? filteredProducts
            : filteredDiscountProducts
        }
      />
    </>
  );
};
export default SalePage;
