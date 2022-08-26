import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <header className="bg-white w-full h-20 shadow-lg flex justify-center items-center px-4 mb-8 sticky top-0">
      <nav className="container flex justify-between items-center md:max-w-6xl lg:max-w-7xl">
        <div>logo</div>
        <ul className="flex items-center gap-x-4 ">
          <li>
            <Link className="p-4 mx-2 bg-red-300 rounded-md " to="/">
              خانه
            </Link>
          </li>
          <li>
            <Link className="p-4 mx-2 bg-red-300 rounded-md" to="/products">
              محصولات
            </Link>
          </li>
          <li>
            <Link className="p-4 mx-2 bg-red-300 rounded-md" to="/">
              فیلتر ها
            </Link>
          </li>
          <li>
            <Link className="p-4 mx-2 bg-red-300 rounded-md" to="/">
              درباره ما
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
