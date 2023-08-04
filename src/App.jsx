import "./App.css";

import { Route, Routes } from "react-router-dom";

//pages
import Layout from "./pages/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
