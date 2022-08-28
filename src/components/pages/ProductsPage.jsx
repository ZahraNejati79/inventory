import Layout from "../Layout/Layout";
import ProductList from "../productList";

const ProductsPage = ({ productList, setProductList }) => {
  return (
    <Layout>
      <div className="flex items-center justify-center">
        <ProductList
          productList={productList}
          setProductList={setProductList}
        />
      </div>
    </Layout>
  );
};

export default ProductsPage;
