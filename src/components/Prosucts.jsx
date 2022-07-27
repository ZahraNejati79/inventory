import { useState } from "react";

const Products = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <section>
      <div className={`${isShow ? "hidden" : ""}`}>
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
                type="number"
                id="quantity"
                name="quantity"
              />
            </div>
            <div className="flex-col">
              <label className="block mb-2" htmlFor="category">
                دسته
              </label>
              <select
                className="border-slate-500 w-1/2 rounded-lg "
                type="text"
                id="category"
                name="category"
              />
            </div>
          </form>
          <div className="p-2 flex justify-between items-center gap-1 w-full">
            <button className="w-full border-slate-300 rounded-lg py-2 bg-slate-400 mr-1">
              اضافه کردن
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={() => setIsShow(!isShow)}
        className={`text-slate-500 mt-2 ${isShow ? "" : "hidden"} `}
      >
        اضافه کردن عنوان جدید؟
      </button>
    </section>
  );
};

export default Products;
