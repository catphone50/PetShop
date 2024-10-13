import { NavLink } from "react-router-dom";
import Title from "../Tittle";
import styles from "./styles.module.css";

const Categories = ({ categories, link = false }) => {
  const imageUrl = `http://localhost:3333`;
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
                    src={`${imageUrl}${category.image}`}
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
export default Categories;
