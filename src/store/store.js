import { configureStore } from "@reduxjs/toolkit";

//slices
import HomeSlice from "./slices/HomeSlice";
import ProductsPageSlice from "./slices/ProductsPageSlice";

const store = configureStore({
  reducer: {
    home: HomeSlice,
    products: ProductsPageSlice,
  },
});

export default store;
