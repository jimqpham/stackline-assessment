import { configureStore } from "@reduxjs/toolkit";
import { fetchDataReducer } from "./fetchDataSlice";

export default configureStore({
	reducer: { fetchData: fetchDataReducer },
});
