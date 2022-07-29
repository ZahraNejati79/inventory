import { useEffect, useState } from "react";
import "./App.css";
import Categorys from "./components/Category";
import Filter from "./components/Filter";
import NavBar from "./components/NavBar";
import ProductList from "./components/productList";
import Products from "./components/Prosucts";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [productList, setProductList] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    let result = productList;
    result = filterSearchTitle(result);
    result = sortDateHandler(result);
    setFilterProducts(result);
  }, [productList, sort, search]);

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
    console.log(sort);
    setSort(e.target.value);
  };
  const sortDateHandler = (array) => {
    let sortedProducts = [...array];
    return sortedProducts.sort((a, b) => {
      if (sort === "latest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (sort === "earliest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      }
    });
  };
  return (
    <div dir="rtl" className="w-screen min-h-screen container bg-slate-800 ">
      <NavBar />
      <div className="container max-w-screen-sm mx-auto p-4 h-1/2 ">
        <Categorys setCategories={setCategories} />
        <Products options={categories} setProductList={setProductList} />
        <Filter
          sort={sort}
          search={search}
          onSearch={searchHandler}
          onSort={sortHandler}
        />
        <ProductList
          productList={filterProducts}
          setProductList={setProductList}
          categories={categories}
        />
      </div>
    </div>
  );
};

export default App;
