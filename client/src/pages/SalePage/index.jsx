import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import Navigate from "../../components/Navigate";
import { fetchProducts } from "../../redux/slices/productsSlice";
import Product from "../../components/Product";

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
      <Product products={filteredProducts} />
    </>
  );
};
export default SalePage;
