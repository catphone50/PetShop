import { useDispatch, useSelector } from "react-redux";
import Navigate from "../../components/Navigate";
import ProductsList from "../../components/ProductsList";
import styles from "./styles.module.css";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/slices/productsSlice";
import Title from "../../components/Title";
import FilterProduct from "../../components/FilterProduct";
import { CircularProgress, LinearProgress } from "@mui/material";

const AllProductsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.products.data);
  const filteredProducts = useSelector(
    (state) => state.filter.filteredProducts
  );
  const isLoading = useSelector((state) => state.products.isLoading);

  return (
    <>
      <Navigate
        way={[
          { title: "Main Page", link: "/" },
          { title: "All products", link: "/allProducts" },
        ]}
      />
      <Title className={styles.pageTitle} title="All products" />
      {isLoading ? (
        <CircularProgress size="3rem" />
      ) : (
        <>
          <FilterProduct products={products} />
          <ProductsList
            products={filteredProducts.length > 0 ? filteredProducts : products}
          />
        </>
      )}
    </>
  );
};

export default AllProductsPage;
