import styles from "./styles.module.css";
import { nanoid } from "nanoid";

const Navigate = ({ way }) => {
  return (
    <div className={styles.navigateContainer}>
      {way.map((btn) => {
        return (
          <>
            <a key={nanoid(5)} href={`${btn.link}`} className={styles.btnNav}>
              {btn.title}
            </a>
            <div className={styles.line} />
          </>
        );
      })}
    </div>
  );
};

export default Navigate;
