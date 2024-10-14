import { useEffect } from "react";
import Title from "../../components/Title";
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../redux/slices/categorySlice";
import Navigate from "../../components/Navigate";
import ProductsList from "../../components/ProductsList";

const CategoryPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.data);

  useEffect(() => {
    dispatch(fetchCategory(id));
  }, [id, dispatch]);

  return (
    <div className={styles.categoryContainer}>
      <Navigate
        way={[
          { title: "Main Page", link: "/" },
          { title: "Categories", link: "/categories" },
          { title: `${category.category.title}`, link: `/categories/${id}` },
        ]}
      />

      <Title className={styles.title} title={category.category.title} />
      <ProductsList products={category.data} />
    </div>
  );
};

export default CategoryPage;
