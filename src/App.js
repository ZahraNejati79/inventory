import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Filter from "./components/Filter";
import ProductList from "./components/productList";
import HomePage from "./components/pages/HemePage";
const App = () => {
  const [categories, setCategories] = useState([]);
  const [productList, setProductList] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    let result = productList;
    result = filterSearchTitle(result);
    result = filterCategoryHandler(result);
    result = sortDateHandler(result);
    setFilterProducts(result);
  }, [productList, sort, search, selectedCategory]);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const savedCatogories =
      JSON.parse(localStorage.getItem("categories")) || [];
    setProductList(savedProducts);
    setCategories(savedCatogories);
  }, []);

  useEffect(() => {
    if (productList.length) {
      localStorage.setItem("products", JSON.stringify(productList));
    }
  }, [productList]);

  useEffect(() => {
    if (categories.length) {
      localStorage.setItem("categories", JSON.stringify(categories));
    }
  }, [categories]);

  const searchHandler = (e) => {
    setSearch(e.target.value.trim().toLowerCase());
  };
  const filterSearchTitle = (array) => {
    return array.filter((p) => p.title.toLowerCase().includes(search));
  };
  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  const sortDateHandler = (array) => {
    let sortedProducts = [...array];
    return sortedProducts.sort((a, b) => {
      if (sort === "latest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      } else if (sort === "earliest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      }
    });
  };

  const filterCategoryHandler = (array) => {
    if (!selectedCategory) return array;
    return array.filter((p) => p.categoryId === selectedCategory);
  };

  const onCategoryFileter = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                setCategories={setCategories}
                options={categories}
                setProductList={setProductList}
              />
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
      <div
        dir="rtl"
        className="container flex items-center justify-center dark:bg-slate-800 "
      >
        <div className="container lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:gap-4 max-w-xl  md:max-w-7xl  p-4  ">
          <Filter
            sort={sort}
            search={search}
            selectedCategory={selectedCategory}
            onSearch={searchHandler}
            onSort={sortHandler}
            onCategoryFileter={onCategoryFileter}
            categories={categories}
          />
          <ProductList
            productList={filterProducts}
            setProductList={setProductList}
            categories={categories}
          />
        </div>
      </div>
    </>
  );
};

export default App;
