const Filter = () => {
  return (
    <div className="flex-col justify-center py-6 rounded-lg pb-2 mt-2">
      <div className="flex justify-between items-center  w-full mb-2">
        <label className="text-slate-400" htmlFor="search">
          جستوجو
        </label>
        <input
          className="bg-slate-800 text-slate-400 border-slate-500 w-1/2 rounded-lg "
          type="text"
          placeholder="جستوجو"
        />
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="text-slate-400">مرتب سازی</div>
        <select className="bg-slate-800 text-slate-400 border-slate-500 w-1/2 rounded-lg">
          <option value="">مرتب سازی بر اساس </option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
