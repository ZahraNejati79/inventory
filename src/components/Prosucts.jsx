import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = ({ setProductList, options }) => {
  const [productFormData, setProductFormData] = useState({
    title: "",
    quantity: 0,
    categoryId: "",
  });

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
    setProductList((prevState) => [...prevState, newProduct]);
    setProductFormData({ title: "", quantity: 0, categoryId: "" });
    toast.success("با موفقیت اضافه شد");
  };
  return (
    <section className="mt-8 md:mt-0">
      <div>
        <span className="text-gray-900 dark:text-slate-400 font-bold ">
          اضافه کردن محصول جدید
        </span>
        <div className="flex-col shadow-lg dark:border dark:border-slate-600 h-full rounded-lg pb-2 mt-6 bg-white dark:bg-slate-800">
          <form
            action="submit"
            className="flex-col item-start dark:border-slate-700 justify-center h-5/6 p-2"
          >
            <div className="flex-col mb-4 text-gray-900 dark:text-slate-400 ">
              <label className="block mb-2" htmlFor="title">
                عنوان
              </label>
              <input
                className="appearance-none border-slate-200 dark:border-slate-600  focus:border-transparent focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-500  w-1/2 rounded-lg dark:bg-slate-800 bg-white"
                value={productFormData.title}
                onChange={changeProductDataHandler}
                type="text"
                id="title"
                name="title"
              />
            </div>
            <div className="flex-col mb-4 text-gray-900 dark:text-slate-400">
              <label
                className="block mb-2 text-gray-900 dark:text-slate-400"
                htmlFor="quantity"
              >
                تعداد
              </label>
              <input
                className="appearance-none border-slate-200 dark:border-slate-600  focus:border-transparent focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-500 w-1/2 rounded-lg dark:bg-slate-800 bg-white"
                value={productFormData.quantity}
                onChange={changeProductDataHandler}
                type="number"
                id="quantity"
                name="quantity"
              />
            </div>
            <div className="flex-col mb-4 text-gray-900 dark:text-slate-400 ">
              <span className="block mb-2">عنوان دسته</span>
              <select
                value={productFormData.categoryId}
                onChange={changeProductDataHandler}
                name="categoryId"
                className="appearance-none border-slate-200 dark:border-slate-600  focus:border-transparent focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-500 w-1/2 rounded-lg text-slate-500 dark:bg-slate-800 bg-white"
              >
                <option disabled selected hidden value="">
                  انتخاب عنوان دسته
                </option>
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
              className="w-full border-slate-300 rounded-lg py-2 dark:bg-slate-400 bg-gray-500 text-white dark:text-black mr-1"
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
