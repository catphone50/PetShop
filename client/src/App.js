import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./styles.module.css";
import Main from "./pages/MainPage";
import CategoriesPage from "./pages/CategoriesPage";
import SalePage from "./pages/SalePage";
import AllProductsPage from "./pages/AllProductsPage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/:id" element={<CategoryPage />} />
        <Route path="/sale" element={<SalePage />} />
        <Route path="/allProducts" element={<AllProductsPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
