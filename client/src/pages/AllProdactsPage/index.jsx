import { useDispatch, useSelector } from "react-redux";
import Navigate from "../../components/Navigate";
import Product from "../../components/Product";
import styles from "./styles.module.css";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/slices/productsSlice";

const AllProductsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.products.data);

  return (
    <>
      <Navigate
        way={[
          { title: "Main Page", link: "/" },
          { title: "All sale", link: "/sale" },
        ]}
      />
      <Product products={products} />
    </>
  );
};

export default AllProductsPage;
