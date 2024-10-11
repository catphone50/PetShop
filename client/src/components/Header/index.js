import styles from "./styles.module.css";
import logo from "../../assets/icons/logo.svg";
import { NavLink } from "react-router-dom";
import basket from "../../assets/icons/basket.svg";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <NavLink to="/" className={styles.logo}>
        <img src={logo} alt="logo" />
      </NavLink>

      <nav className={styles.linkContainer}>
        <NavLink
          className={styles.nav}
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#0D50FF" : "#282828",
          })}
        >
          Main Page
        </NavLink>
        <NavLink
          className={styles.nav}
          to="/categories"
          style={({ isActive }) => ({
            color: isActive ? "#0D50FF" : "#282828",
          })}
        >
          Categories
        </NavLink>
        <NavLink
          className={styles.nav}
          to="/allProducts"
          style={({ isActive }) => ({
            color: isActive ? "#0D50FF" : "#282828",
          })}
        >
          All products
        </NavLink>
        <NavLink
          className={styles.nav}
          to="/sale"
          style={({ isActive }) => ({
            color: isActive ? "#0D50FF" : "#282828",
          })}
        >
          All sales
        </NavLink>
      </nav>

      <NavLink to="/" className={styles.basket}>
        <img src={basket} alt="basket" />
      </NavLink>
    </header>
  );
};

export default Header;
