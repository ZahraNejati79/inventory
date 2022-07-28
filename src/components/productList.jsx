const ProductList = ({ productList }) => {
  return (
    <div className="flex-col rounded-lg pb-2 mt-2 px-4 ">
      {productList.map((product) => {
        return (
          <div
            className="text-slate-400 flex justify-between items-center border-solid border-b-2 py-2 border-slate-700"
            key={product.id}
          >
            <div>{product.title}</div>
            <div className="flex gap-x-4">
              <div>{product.quantity}</div>
              <div>
                {new Date(product.createdAt).toLocaleDateString("fa-IR")}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
