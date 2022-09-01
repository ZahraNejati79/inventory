import { Link } from "react-router-dom";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import useDarkMode from "../Hook/useDarkMode";

const Navigation = () => {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <header className="bg-gray-100 dark:bg-slate-500 w-full h-20 shadow-lg flex justify-center items-center px-4 mb-8 sticky top-0">
      <nav className="container flex justify-between items-center md:max-w-6xl lg:max-w-7xl">
        <div className="font-bold italic md:text-xl from-neutral-600 mr-20 flex gap-x-4 justify-center items-center">
          INVENTORY
          <div className="text-2xl ">
            <button onClick={() => setTheme(colorTheme)}>
              {colorTheme === "light" ? (
                <MdOutlineLightMode />
              ) : (
                <MdOutlineNightlight />
              )}
            </button>
          </div>
        </div>
        <div className="flex items-center md:text-lg justify-between">
          <ul className="md:flex md:items-center gap-x-4  ">
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
