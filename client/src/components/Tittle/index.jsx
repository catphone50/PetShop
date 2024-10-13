import styles from "./styles.module.css";

const Title = ({ title, className, link = false }) => {
  return (
    <div
      className={`${
        link ? styles.titleContainerLink : styles.titleContainer
      } ${className}`}
    >
      <h2 className={styles.title}>{title}</h2>
      {link && (
        <a href={link} className={styles.link}>
          {title}
        </a>
      )}
    </div>
  );
};
export default Title;
