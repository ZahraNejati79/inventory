import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <header className="bg-white w-full h-20 shadow-lg flex items-center px-4 ">
      <nav className="container flex justify-between items-center">
        <ul className="flex items-center gap-x-4 bg-red-300">
          <li>
            <Link to="/">خانه</Link>
          </li>
          <li>
            <Link to="/">محصولات</Link>
          </li>
          <li>
            <Link to="/">فیلتر ها</Link>
          </li>
          <li>
            <Link to="/">درباره ما</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
