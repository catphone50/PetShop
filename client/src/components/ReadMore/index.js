import { useState } from "react";
import styles from "./styles.module.css";

const ReadMore = ({ text, className, maxLength = 100 }) => {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  if (!text || text.length <= maxLength) {
    return <p className={`${styles.text} ${className}`}>{text}</p>;
  }

  return (
    <p className={`${styles.text} ${className}`}>
      {isReadMore ? `${text.slice(0, maxLength)}...` : text}
      <span onClick={toggleReadMore} className={styles.readMoreBtn}>
        {isReadMore ? "Read More" : "Show Less"}
      </span>
    </p>
  );
};

export default ReadMore;
