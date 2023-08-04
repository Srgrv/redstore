import { createSlice } from "@reduxjs/toolkit";

//icons
import { ImStarFull } from "react-icons/im";
import { ImStarEmpty } from "react-icons/im";
import { ImStarHalf } from "react-icons/im";

const ProductsPageSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [
      {
        image: "./images/product-1.jpg",
        name: "Red Printed",
        i1: <ImStarFull />,
        i2: <ImStarFull />,
        i3: <ImStarFull />,
        i4: <ImStarHalf />,
        i5: <ImStarEmpty />,
        cost: "50",
      },
      {
        image: "./images/product-2.jpg",
        name: "Red Printed",
        i1: <ImStarFull />,
        i2: <ImStarFull />,
        i3: <ImStarFull />,
        i4: <ImStarHalf />,
        i5: <ImStarEmpty />,
        cost: "50",
      },
      {
        image: "./images/product-3.jpg",
        name: "Red Printed",
        i1: <ImStarFull />,
        i2: <ImStarFull />,
        i3: <ImStarFull />,
        i4: <ImStarHalf />,
        i5: <ImStarEmpty />,
        cost: "50",
      },
      {
        image: "./images/product-4.jpg",
        name: "Red Printed",
        i1: <ImStarFull />,
        i2: <ImStarFull />,
        i3: <ImStarFull />,
        i4: <ImStarHalf />,
        i5: <ImStarEmpty />,
        cost: "50",
      },
      {
        image: "./images/product-5.jpg",
        name: "Red Printed",
        i1: <ImStarFull />,
        i2: <ImStarFull />,
        i3: <ImStarFull />,
        i4: <ImStarHalf />,
        i5: <ImStarEmpty />,
        cost: "50",
      },
      {
        image: "./images/product-6.jpg",
        name: "Red Printed",
        i1: <ImStarFull />,
        i2: <ImStarFull />,
        i3: <ImStarFull />,
        i4: <ImStarHalf />,
        i5: <ImStarEmpty />,
        cost: "50",
      },
      {
        image: "./images/product-7.jpg",
        name: "Red Printed",
        i1: <ImStarFull />,
        i2: <ImStarFull />,
        i3: <ImStarFull />,
        i4: <ImStarHalf />,
        i5: <ImStarEmpty />,
        cost: "50",
      },
      {
        image: "./images/product-8.jpg",
        name: "Red Printed",
        i1: <ImStarFull />,
        i2: <ImStarFull />,
        i3: <ImStarFull />,
        i4: <ImStarHalf />,
        i5: <ImStarEmpty />,
        cost: "50",
      },
      {
        image: "./images/product-9.jpg",
        name: "Red Printed",
        i1: <ImStarFull />,
        i2: <ImStarFull />,
        i3: <ImStarFull />,
        i4: <ImStarHalf />,
        i5: <ImStarEmpty />,
        cost: "50",
      },
      {
        image: "./images/product-10.jpg",
        name: "Red Printed",
        i1: <ImStarFull />,
        i2: <ImStarFull />,
        i3: <ImStarFull />,
        i4: <ImStarHalf />,
        i5: <ImStarEmpty />,
        cost: "50",
      },
      {
        image: "./images/product-11.jpg",
        name: "Red Printed",
        i1: <ImStarFull />,
        i2: <ImStarFull />,
        i3: <ImStarFull />,
        i4: <ImStarHalf />,
        i5: <ImStarEmpty />,
        cost: "50",
      },
      {
        image: "./images/product-12.jpg",
        name: "Red Printed",
        i1: <ImStarFull />,
        i2: <ImStarFull />,
        i3: <ImStarFull />,
        i4: <ImStarHalf />,
        i5: <ImStarEmpty />,
        cost: "50",
      },
    ],
  },
});

export default ProductsPageSlice.reducer;
