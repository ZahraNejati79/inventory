import "./App.css";
import Categorys from "./components/Category";
import NavBar from "./components/NavBar";
import Products from "./components/Prosucts";

const App = () => {
  return (
    <div
      dir="rtl"
      className="w-screen min-h-screen container h-screen bg-slate-800 "
    >
      <NavBar />
      <div className="container max-w-screen-sm mx-auto p-4 h-1/2 ">
        <Categorys />
        <Products />
      </div>
    </div>
  );
};

export default App;
