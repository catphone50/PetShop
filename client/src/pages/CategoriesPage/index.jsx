import { useDispatch, useSelector } from "react-redux";
import CategoriesList from "../../components/CategoriesList";
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
      <CategoriesList categories={categories} />
    </>
  );
};
export default CategoriesPage;
