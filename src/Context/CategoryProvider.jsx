import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const CategoryContext = createContext();
const CategoryContextDispatcher = createContext();

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const savedCatogories =
      JSON.parse(localStorage.getItem("categories")) || [];
    setCategories(savedCatogories);
  }, []);

  useEffect(() => {
    if (categories.length) {
      localStorage.setItem("categories", JSON.stringify(categories));
    }
  }, [categories]);

  return (
    <CategoryContext.Provider value={categories}>
      <CategoryContextDispatcher.Provider value={setCategories}>
        {children}
      </CategoryContextDispatcher.Provider>
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;

export const useCategories = () => useContext(CategoryContext);
export const useCategoriesAction = () => useContext(CategoryContextDispatcher);
