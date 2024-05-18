import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./Components/Home/Home";
import Product from "./Components/Product/Product";
import Products from "./Components/Products/Products";
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
