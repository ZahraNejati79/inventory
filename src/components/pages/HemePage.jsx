import Categorys from "../Category";
import Layout from "../Layout/Layout";
import Products from "../Prosucts";

const HomePage = ({ setCategories, options, setProductList }) => {
  return (
    <Layout>
      <div
        dir="rtl"
        className="container flex items-center justify-center dark:bg-slate-800 "
      >
        <div className="container lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:gap-4 max-w-xl  md:max-w-7xl  p-4  ">
          <Categorys setCategories={setCategories} />
          <Products options={options} setProductList={setProductList} />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
