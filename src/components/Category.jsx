import { useState } from "react";

const Categorys = () => {
  const [isShow, setIsShow] = useState(false);
  const [categoryFormData, setCategoryFormData] = useState({
    title: "",
    description: "",
  });
  const addNewCategoryHandler = ({ target }) => {
    const { name, value } = target;
    setCategoryFormData({ ...categoryFormData, [name]: value });
  };
  return (
    <section>
      <div className={`${isShow ? "hidden" : ""}`}>
        <span className="text-slate-400 font-bold ">اضافه کردن عنوان جدید</span>
        <div className="flex-col bg-slate-500 h-full rounded-lg pb-2 mt-2">
          <form
            action="submit"
            className="flex-col item-start justify-center h-5/6 p-2"
          >
            <div className="flex-col">
              <label className="block mb-2" htmlFor="title">
                عنوان محصول
              </label>
              <input
                value={categoryFormData.title}
                onChange={addNewCategoryHandler}
                className="border-slate-500 w-1/2 rounded-lg "
                type="text"
                id="title"
                name="title"
              />
            </div>
            <div className="flex-col h-1/2 ">
              <label className="block mb-2" htmlFor="description">
                توضیح
              </label>
              <textarea
                value={categoryFormData.description}
                onChange={addNewCategoryHandler}
                className="w-full h-2/3 rounded-lg "
                type="text"
                id="description"
                name="description"
              />
            </div>
          </form>
          <div className="p-2 flex justify-between items-center gap-1 ">
            <button className="w-2/3 border-slate-300 rounded-lg py-2 bg-slate-400 mr-1">
              اضافه کردن
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsShow(true);
              }}
              className="w-2/3 border-slate-300 rounded-lg py-2 bg-slate-400 ml-1"
            >
              بازگشت
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
