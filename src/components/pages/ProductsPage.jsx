import Filter from "../Filter";
import Layout from "../Layout/Layout";
import ProductList from "../productList";

const ProductsPage = ({
  productList,
  setProductList,
  search,
  onSearch,
  sort,
  onCategoryFileter,
  selectedCategory,
  onSort,
  categories,
}) => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <Filter
          search={search}
          onSearch={onSearch}
          sort={sort}
          onCategoryFileter={onCategoryFileter}
          selectedCategory={selectedCategory}
          onSort={onSort}
          categories={categories}
        />
        <ProductList
          productList={productList}
          setProductList={setProductList}
          search={search}
          categories={categories}
        />
      </div>
    </Layout>
  );
};

export default ProductsPage;
