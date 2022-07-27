import { useState } from "react";
import Select from "react-select";

const Products = ({ options }) => {
  const [productFormData, setProductFormData] = useState({
    title: "",
    quantity: 0,
    categoryId: "",
  });
  const [productList, setProductList] = useState([]);
  const changeProductDataHandler = (e) => {
    const { name, value } = e.target;
    setProductFormData({ ...productFormData, [name]: value });
  };

  const addNewProductDataHAndler = (e) => {
    e.preventDefault();
    const newProduct = {
      ...productFormData,
      createdAt: new Date().toISOString(),
      id: new Date().getTime(),
    };
    setProductFormData({ title: "", quantity: 0, categoryId: "" });
  };
  return (
    <section>
      <div>
        <span className="text-slate-400 font-bold ">اضافه کردن محصول جدید</span>
        <div className="flex-col bg-slate-500 h-full rounded-lg pb-2 mt-2">
          <form
            action="submit"
            className="flex-col item-start justify-center h-5/6 p-2"
          >
            <div className="flex-col">
              <label className="block mb-2" htmlFor="title">
                عنوان
              </label>
              <input
                className="border-slate-500 w-1/2 rounded-lg "
                value={productFormData.title}
                onChange={changeProductDataHandler}
                type="text"
                id="title"
                name="title"
              />
            </div>
            <div className="flex-col">
              <label className="block mb-2" htmlFor="quantity">
                تعداد
              </label>
              <input
                className="border-slate-500 w-1/2 rounded-lg "
                value={productFormData.quantity}
                onChange={changeProductDataHandler}
                type="number"
                id="quantity"
                name="quantity"
              />
            </div>
            <div className="flex-col">
              <span className="block">عنوان دسته</span>
              <select
                value={productFormData.categoryId}
                onChange={changeProductDataHandler}
                name="categoryId"
                className="border-slate-500 w-1/2 rounded-lg text-slate-500"
              >
                <option value="">انتخاب عنوان دسته</option>
                {options.map((category) => {
                  return (
                    <option key={category.id} value={category.id}>
                      {category.title}
                    </option>
                  );
                })}
              </select>
            </div>
          </form>
          <div className="p-2 flex justify-between items-center gap-1 w-full">
            <button
              onClick={addNewProductDataHAndler}
              className="w-full border-slate-300 rounded-lg py-2 bg-slate-400 mr-1"
            >
              اضافه کردن
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
