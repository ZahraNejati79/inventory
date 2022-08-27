import { Link } from "react-router-dom";
import Search from "./Search";
const Navigation = () => {
  return (
    <header className="bg-white w-full h-20 shadow-lg flex justify-center items-center px-4 mb-8 sticky top-0">
      <nav className="container flex justify-between items-center md:max-w-6xl lg:max-w-7xl">
        <div className="font-bold italic md:text-xl from-neutral-600 mr-20">
          INVENTORY
        </div>
        <div className="flex items-center md:text-lg justify-between w-full ">
          <div className="flex items-center justify-center  w-1/2">
            <Search />
            {/* search={search} onSearch={searchHandler} */}
          </div>
          <ul className="flex items-center gap-x-4 ">
            <li>
              <Link
                className="p-4 mx-2 hover:text-gray-400 rounded-md"
                to="/about"
              >
                درباره ما
              </Link>
            </li>
            <li>
              <div className="cursor-pointer p-4 mx-2 hover:text-gray-400 rounded-md">
                فیلتر ها
              </div>
            </li>
            <li>
              <Link
                className="p-4 mx-2 hover:text-gray-400 rounded-md"
                to="/products"
              >
                محصولات
              </Link>
            </li>
            <li>
              <Link className="p-4 mx-2 hover:text-gray-400 rounded-md " to="/">
                خانه
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
