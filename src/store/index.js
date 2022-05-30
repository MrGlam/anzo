import { configureStore } from "@reduxjs/toolkit";
import cardExpandSlice from "./cardExpand-slice";

const store = configureStore({
    reducer: {cardExpand:cardExpandSlice.reducer}
})

export default store