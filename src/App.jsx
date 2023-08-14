import "./App.css";

import { Route, Routes } from "react-router-dom";

//pages
import Layout from "./pages/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import TestPage from "./pages/TestPage/TestPage";
import ProductPage from "./pages/ProductPage/ProductPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:id" element={<ProductPage />} />
        <Route path="test" element={<TestPage />} />
      </Route>
    </Routes>
  );
}

export default App;

//не работает роутинг
