import { useState } from "react";
import "./App.css";
import Categorys from "./components/Category";
import Filter from "./components/Filter";
import NavBar from "./components/NavBar";
import ProductList from "./components/productList";
import Products from "./components/Prosucts";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [productList, setProductList] = useState([]);
  return (
    <div dir="rtl" className="w-screen min-h-screen container bg-slate-800 ">
      <NavBar />
      <div className="container max-w-screen-sm mx-auto p-4 h-1/2 ">
        <Categorys setCategories={setCategories} />
        <Products options={categories} setProductList={setProductList} />
        <Filter />
        <ProductList
          productList={productList}
          setProductList={setProductList}
          categories={categories}
        />
      </div>
    </div>
  );
};

export default App;
