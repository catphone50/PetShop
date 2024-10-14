import { NavLink } from "react-router-dom";
import Title from "../Title";
import styles from "./styles.module.css";
import { GENERAL_URL } from "../../config/apiConstants";

const CategoriesList = ({ categories, link = false }) => {
  return (
    <section className={link ? styles.categoriesLink : styles.categories}>
      <Title title="Categories" link={link} />
      {categories ? (
        <div
          className={
            link ? styles.categoriesContainer : styles.categoriesContainerAll
          }
        >
          {categories.map((category) => {
            return (
              <NavLink key={category.id} to={`/categories/${category.id}`}>
                <div className={styles.category}>
                  <img
                    className={styles.imageCategory}
                    src={`${GENERAL_URL}${category.image}`}
                    alt={`category ${category.title}`}
                  />
                  <h5 className={styles.titleCategory}>{category.title}</h5>
                </div>
              </NavLink>
            );
          })}
        </div>
      ) : (
        <p className={styles.emptyCategory}>No categories</p>
      )}
    </section>
  );
};
export default CategoriesList;
