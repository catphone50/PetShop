import { useDispatch, useSelector } from "react-redux";
import Categories from "../../components/Categories";
import { fetchCategories } from "../../redux/slices/categoriesSlice";
import { useEffect } from "react";
import Navigate from "../../components/Navigate";

const CategoriesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const categories = useSelector((state) => state.categories.data);

  return (
    <>
      <Navigate
        way={[
          { title: "Main Page", link: "/" },
          { title: "Categories", link: "/categories" },
        ]}
      />
      <Categories categories={categories} />
    </>
  );
};
export default CategoriesPage;
