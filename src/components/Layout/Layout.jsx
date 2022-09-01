import Navigation from "../Navigation";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen min-w-screen  bg-gray-100 dark:bg-slate-800">
      <Navigation />
      <div className="bg-gray-100 dark:bg-slate-800 container  ">
        {children}
      </div>
    </div>
  );
};

export default Layout;
