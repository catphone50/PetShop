import { useDispatch, useSelector } from "react-redux";
import Title from "../../components/Title";
import { useEffect } from "react";
import Navigate from "../../components/Navigate";
import { fetchProducts } from "../../redux/slices/productsSlice";
import ProductsList from "../../components/ProductsList";
import styles from "./styles.module.css";

const SalePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.products.data);

  const filteredProducts = products.filter(
    (product) => product.discont_price !== null
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
      <ProductsList products={filteredProducts} />
    </>
  );
};
export default SalePage;
