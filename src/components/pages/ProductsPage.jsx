import Layout from "../Layout/Layout";
import ProductList from "../productList";

const ProductsPage = ({ productList, setProductList, categories }) => {
  return (
    <Layout>
      <div className="flex items-center justify-center">
        <ProductList
          productList={productList}
          setProductList={setProductList}
          categories={categories}
        />
      </div>
    </Layout>
  );
};

export default ProductsPage;
