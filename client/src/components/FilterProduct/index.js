import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  applyFilters,
  setPriceRange,
  setSortOption,
  toggleDiscounted,
  resetFilters,
} from "../../redux/slices/filterSlice";
import arrow from "../../assets/icons/arrow.svg";

const FilterProduct = ({ products, isSalePage = false }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { priceRange, discounted, sortOption } = useSelector(
    (state) => state.filter
  );

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    const newValue = value === "" ? "" : Number(value);
    dispatch(setPriceRange({ ...priceRange, [name]: newValue }));
  };

  const handleDiscountChange = () => {
    dispatch(toggleDiscounted());
  };

  const handleSortChange = (e) => {
    dispatch(setSortOption(e.target.value));
  };

  useEffect(() => {
    dispatch(applyFilters({ products }));
  }, [priceRange, discounted, sortOption, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(resetFilters());
    };
  }, [dispatch]);

  return (
    <div className={styles.filterContainer}>
      <label className={styles.filterLabel}>
        Price
        <input
          className={styles.inputRangPrice}
          type="number"
          placeholder="from"
          name="from"
          value={priceRange.from || ""}
          onChange={handlePriceChange}
        />
        <input
          className={styles.inputRangPrice}
          type="number"
          placeholder="to"
          name="to"
          value={priceRange.to || ""}
          onChange={handlePriceChange}
        />
      </label>

      {!isSalePage && (
        <label className={styles.filterLabelCheckbox}>
          Discounted items
          <input
            className={styles.inputCheckbox}
            type="checkbox"
            checked={discounted}
            onChange={handleDiscountChange}
          />
          <span className={styles.checkmark}></span>
        </label>
      )}

      <label className={styles.filterLabel}>
        Sorted
        <select
          onClick={() => setIsOpen(!isOpen)}
          onBlur={() => setIsOpen(false)}
          className={`${styles.inputSorted}`}
          value={sortOption}
          onChange={handleSortChange}
          placeholder="by default"
        >
          <option value="byDefault">by default</option>
          <option value="newest">newest</option>
          <option value="high-low">price: high-low</option>
          <option value="low-high">price: low-high</option>
        </select>
        <div
          className={`${styles.selectArrow} ${isOpen ? `${styles.open}` : ""}`}
        >
          <img src={arrow} alt="arrow" />
        </div>
      </label>
    </div>
  );
};

export default FilterProduct;
