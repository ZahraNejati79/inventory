import Navigation from "../Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className="bg-gray-100 dark:bg-slate-800 ">{children}</div>
    </>
  );
};

export default Layout;
