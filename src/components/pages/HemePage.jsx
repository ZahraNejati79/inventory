import Categorys from "../Category";
import Layout from "../Layout/Layout";
import Products from "../Prosucts";

const HomePage = ({ setProductList, option, setCategories }) => {
  return (
    <Layout>
      <div
        dir="rtl"
        className="container flex items-center justify-center bg-gray-100 dark:bg-slate-800 "
      >
        <div className="container lg:grid lg:grid-cols-2  lg:gap-4 max-w-xl md:max-w-6xl lg:max-w-7xl  p-4  ">
          <Categorys setCategories={setCategories} />
          <Products options={option} setProductList={setProductList} />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
