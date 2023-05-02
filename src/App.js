import { useState } from "react";
import "./App.css";
import AddProduct from "./component/AddProduct";
import ProductsItems from "./component/ProductsItems";

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "add product" : "show Products"}
      </button>
      {toggle ? <ProductsItems /> : <AddProduct />}
    </div>
  );
}

export default App;
