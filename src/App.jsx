import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;