import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./styles.module.css";
import Main from "./pages/MainPage";
import CategoriesPage from "./pages/CategoriesPage";
import SalePage from "./pages/SalePage";
import AllProductsPage from "./pages/AllProdactsPage";

function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/sale" element={<SalePage />} />
        <Route path="/allProducts" element={<AllProductsPage />} />
        {/*<Route path="/cart" element={<Contacts />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
