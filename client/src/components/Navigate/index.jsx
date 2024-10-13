import React from "react";
import styles from "./styles.module.css";
import { nanoid } from "nanoid";

const Navigate = ({ way }) => {
  return (
    <div className={styles.navigateContainer}>
      {way.map((btn) => {
        return (
          <React.Fragment key={nanoid(5)}>
            <a href={`${btn.link}`} className={styles.btnNav}>
              {btn.title}
            </a>
            <div className={styles.line} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Navigate;
