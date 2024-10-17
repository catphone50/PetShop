import { useForm } from "react-hook-form";
import styles from "./styles.module.css";

const Form = ({ onSubmit, className, successful, textButton }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  return (
    <form
      className={`${styles.formContainer} ${className}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.inputContainer}>
        <input
          className={styles.inputOrder}
          type="text"
          placeholder="Name"
          {...register("firstName", {
            required: true,
            maxLength: 80,
          })}
        />
        {errors.firstName?.type === "maxLength" && (
          <span className={styles.error}>
            Name should be no more than 80 characters
          </span>
        )}
        {errors.firstName?.type === "required" && (
          <span className={styles.error}>Name is required</span>
        )}
      </div>
      <div className={styles.inputContainer}>
        <input
          className={styles.inputOrder}
          type="tel"
          placeholder="Phone number"
          {...register("number", {
            required: true,
            minLength: 6,
            maxLength: 12,
            pattern: /^\d+$/,
          })}
        />
        {errors.number?.type === "required" && (
          <span className={styles.error}>Phone number is required</span>
        )}
        {errors.number?.type === "maxLength" && (
          <span className={styles.error}>
            Number should be no more than 12 characters
          </span>
        )}
        {errors.number?.type === "minLength" && (
          <span className={styles.error}>
            Number should be more than 6 characters
          </span>
        )}
        {errors.number?.type === "pattern" && (
          <span className={styles.error}>
            Number should contain only numbers
          </span>
        )}
      </div>
      <div className={styles.inputContainer}>
        <input
          className={styles.inputOrder}
          type="text"
          placeholder="Email"
          {...register("Email", {
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
        />
        {errors.Email?.type === "required" && (
          <span className={styles.error}>Email is required</span>
        )}
        {errors.Email?.type === "pattern" && (
          <span className={styles.error}>Email is not correct</span>
        )}
      </div>
      <button
        disabled={errors.number || errors.Email || errors.firstName}
        className={`${styles.submitBtn} ${successful && styles.successful}`}
        type="submit"
      >
        {successful ? successful : textButton}
      </button>
    </form>
  );
};

export default Form;
