import { createSlice } from "@reduxjs/toolkit";

const HomeSlice = createSlice({
  name: "homeSlice",
  initialState: {
    isNav: false;
  },
  reducers: {
    toggleNav(state, action) {
        state.isNav = !state.isNav;
    }
  }
});

export const {toggleNav} = HomeSlice.actions; 

export default HomeSlice.reducer;
