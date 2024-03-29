import { HiOutlineTrash } from "react-icons/hi";

const ProductList = ({ productList, setProductList, categories }) => {
  const deleteOneProductHandler = (id) => {
    const filteredProducts = productList.filter((product) => product.id !== id);
    setProductList(filteredProducts);
    console.log(productList);
  };
  const findCategoryTitle = (categoryId) => {
    return categories.find((c) => c.id === parseInt(categoryId)).title;
  };

  return (
    <div className="flex-col rounded-lg pb-2 px-4 w-full lg:w-5/6 mt-8">
      <div>
        <h2 className="text-gray-900 dark:text-slate-400 text-sm md:text-xl font-bold mb-10 text-right ">
          لیست محصولات
        </h2>
      </div>
      {productList.map((product) => {
        return (
          <div
            className="md:px-20 overflow-x-auto text-sm  md:text-xl text-gray-900 dark:text-slate-400 flex justify-between items-center border-solid border-b-2 py-2 border-slate-400 dark:border-slate-700"
            key={product.id}
          >
            <div>{product.title}</div>
            <div className="flex gap-x-4 md:gap-x-8  md:text-xl">
              <div>{findCategoryTitle(product.categoryId)}</div>
              <div>{product.quantity}</div>
              <div>
                {new Date(product.createdAt).toLocaleDateString("fa-IR")}
              </div>
              <button
                onClick={() => deleteOneProductHandler(product.id)}
                className="text-red-500 font-bold text-xl md:text-3xl"
              >
                <HiOutlineTrash />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
