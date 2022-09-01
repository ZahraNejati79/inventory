import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Categorys = ({ setCategories }) => {
  const [isShow, setIsShow] = useState(false);
  const [categoryFormData, setCategoryFormData] = useState({
    title: "",
    description: "",
  });

  const onChangeHandlerCategoryFormData = ({ target }) => {
    const { name, value } = target;
    setCategoryFormData({ ...categoryFormData, [name]: value });
  };
  const addNewCategoryFormDataHandler = (e) => {
    e.preventDefault();
    const newCategory = {
      ...categoryFormData,
      createdAt: new Date().toISOString(),
      id: new Date().getTime(),
    };
    setCategories((prevState) => [...prevState, newCategory]);
    toast.success("با موفقیت اضافه شد");
    setCategoryFormData({ title: "", description: "" });
  };

  return (
    <section>
      <div className={`${isShow ? "hidden" : ""}`}>
        <h2 className="text-gray-900 dark:text-slate-400 font-bold ">
          اضافه کردن دسته جدید
        </h2>
        <div className="flex-col shadow-lg dark:border dark:border-slate-600  h-full rounded-lg pb-2 mt-6 bg-white dark:bg-slate-800">
          <form
            action="submit"
            className="flex-col item-start justify-center h-5/6 p-2"
          >
            <div className="flex-col text-gray-900 dark:text-slate-400">
              <label className="block mb-2" htmlFor="title">
                عنوان دسته
              </label>
              <input
                value={categoryFormData.title}
                onChange={onChangeHandlerCategoryFormData}
                className="dark:bg-slate-800 bg-white appearance-none border-slate-200 dark:border-slate-600  focus:border-transparent focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-500 text-gray-900 dark:text-slate-400  w-1/2 rounded-lg "
                type="text"
                id="title"
                name="title"
              />
            </div>
            <div className="flex-col h-1/2  text-gray-900 dark:text-slate-400">
              <label className="block mb-2" htmlFor="description">
                توضیح
              </label>
              <textarea
                value={categoryFormData.description}
                onChange={onChangeHandlerCategoryFormData}
                className="dark:bg-slate-800 bg-white text-gray-900 appearance-none border-slate-200 dark:border-slate-600  focus:border-transparent focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-500 dark:text-slate-400 w-full h-2/3 rounded-lg "
                type="text"
                id="description"
                name="description"
              />
            </div>
          </form>
          <div className="p-2 flex justify-between items-center gap-1 ">
            <button
              onClick={addNewCategoryFormDataHandler}
              className="w-2/3 border-slate-300 rounded-lg py-2 bg-slate-400 mr-1"
            >
              اضافه کردن
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsShow(true);
              }}
              className="w-2/3 text-gray-900 dark:text-slate-400 border dark:border-slate-500 border-slate-200  hover:border-slate-500   rounded-lg py-2 ml-1"
            >
              بستن
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

export default Categorys;
