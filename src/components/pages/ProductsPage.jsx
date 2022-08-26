import Layout from "../Layout/Layout";
import ProductList from "../productList";

const ProductsPage = ({ productList, setProductList, categories }) => {
  return (
    <Layout>
      <ProductList
        productList={productList}
        setProductList={setProductList}
        categories={categories}
      />
    </Layout>
  );
};

export default ProductsPage;
