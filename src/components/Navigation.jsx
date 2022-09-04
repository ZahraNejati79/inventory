import { Link } from "react-router-dom";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import useDarkMode from "../Hook/useDarkMode";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";
const navData = [
  {
    name: "درباره ما",
    to: "/about",
  },
  {
    name: "ارتباط با ما",
    to: "/",
  },
  {
    name: "محصولات",
    to: "/products",
  },
  {
    name: "خانه",
    to: "/",
  },
];

const Navigation = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showContactUs, setShowContactUs] = useState(false);
  const closeHandler = (e) => {
    if (e.target.id === "container") setIsModalOpen(false);
  };
  return (
    <header className="bg-gray-100 dark:bg-slate-500 w-full h-16 shadow-lg flex justify-center items-center px-4 mb-8 sticky top-0">
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
          <ul className="hidden md:flex md:items-center gap-x-4  ">
            <li className="relative">
              <button
                onClick={() => setShowContactUs(!showContactUs)}
                className="p-4 mx-2 hover:text-gray-400 rounded-md"
              >
                ارتباط با ما
              </button>
              {showContactUs ? (
                <ul className="text-base z-50 absolute right-0  list-none text-right rounded shadow-lg mt-1 bg-white dark:bg-slate-500">
                  <li className="hover:bg-slate-100 dark:hover:bg-slate-400  cursor-pointer py-2 px-8  block w-full whitespace-nowrap  ">
                    <Link to="/about"> درباره ما</Link>
                  </li>
                  <li className="hover:bg-slate-100 dark:hover:bg-slate-400  cursor-pointer py-2 px-8  block w-full whitespace-nowrap  ">
                    کانال تلگرام
                  </li>
                  <li className="hover:bg-slate-100 dark:hover:bg-slate-400  cursor-pointer py-2 px-8  block w-full whitespace-nowrap  ">
                    صفحه اینستاگرام
                  </li>
                </ul>
              ) : (
                ""
              )}
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
              <Link className="p-4 mx-2 hover:text-gray-400 rounded-md" to="/">
                خانه
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden ">
          {isModalOpen ? (
            <div
              onClick={closeHandler}
              className="fixed inset-0 bg-opacity-20 backdrop-blur-sm "
              id="container"
            >
              <div
                dir="rtl"
                className=" w-[60vw] h-screen absolute top-0  right-0 dark:bg-slate-600 bg-gray-300"
              >
                <div className="w-full text-left border-b-2 dark:border-slate-500">
                  <button
                    onClick={() => setIsModalOpen(!isModalOpen)}
                    className="px-8 py-5 text-black  "
                  >
                    <AiOutlineClose />
                  </button>
                </div>
                <ul className=" flex-col  border-t-gray-500 pt-4">
                  <li className="py-4">
                    <Link
                      className="p-4 mx-2 hover:text-gray-400 rounded-md"
                      to="/products"
                    >
                      محصولات
                    </Link>
                  </li>
                  <li className="py-4">
                    <Link
                      className="p-4 mx-2 hover:text-gray-400 rounded-md"
                      to="/"
                    >
                      خانه
                    </Link>
                  </li>
                  <li className="relative">
                    <button
                      onClick={() => setShowContactUs(!showContactUs)}
                      className="p-4 mx-2 flex items-center justify-between hover:text-gray-400  rounded-md"
                    >
                      <div className="ml-4">ارتباط با ما</div>{" "}
                      <div className="text-2xl">
                        <RiArrowDropDownLine />
                      </div>
                    </button>
                    {showContactUs ? (
                      <ul className="flex-col  w-1/2 px-4">
                        <li className="rounded-lg  hover:text-slate-400 dark:hover:bg-slate-400  cursor-pointer py-2 px-8  block w-full whitespace-nowrap  ">
                          <Link to="/about"> درباره ما</Link>
                        </li>
                        <li className="rounded-lg  hover:text-slate-400 dark:hover:bg-slate-400  cursor-pointer py-2 px-8  block w-full whitespace-nowrap  ">
                          کانال تلگرام
                        </li>
                        <li className="rounded-lg  hover:text-slate-400 dark:hover:bg-slate-400  cursor-pointer py-2 px-8  block w-full whitespace-nowrap  ">
                          صفحه اینستاگرام
                        </li>
                      </ul>
                    ) : (
                      ""
                    )}
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <button onClick={() => setIsModalOpen(!isModalOpen)}>
              <GiHamburgerMenu />
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
