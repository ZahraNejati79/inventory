const Filter = ({
  search,
  searchHandler,
  sort,
  onCategoryFileter,
  selectedCategory,
  onSort,
  onSearch,
  categories,
}) => {
  return (
    <div className="flex-col justify-center py-6 rounded-lg pb-2 mt-2">
      <div className="flex justify-between items-center w-full mb-2 ">
        <input
          onChange={onSearch}
          className=" text-right w-full rounded-lg placeholder:text-gray-300  border-2 border-gray-400 focus:border-gray-600 focus:border-transparent focus:ring-0 hover:border-2 hover:border-gray-400"
          type="text"
          placeholder=". . . . .جستوجو"
          value={search}
        />
      </div>
      <div className="flex justify-between items-center w-full mb-2">
        <div className="text-slate-400">مرتب سازی</div>
        <select
          value={sort}
          onChange={onSort}
          className="bg-slate-800 text-slate-400 border-slate-500 w-1/2 rounded-lg"
        >
          <option disabled selected hidden value="">
            قدیم یا جدید
          </option>
          <option value="latest">قدیم</option>
          <option value="earliest">جدید</option>
        </select>
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="text-slate-400">فیلتر دسته ها</div>
        <select
          value={selectedCategory}
          onChange={onCategoryFileter}
          className="bg-slate-800 text-slate-400 border-slate-500 w-1/2 rounded-lg"
        >
          <option selected value="">
            همه
          </option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
