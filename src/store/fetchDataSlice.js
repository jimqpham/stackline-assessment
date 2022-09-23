import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDataSlice = createSlice({
	name: "fetchData",
	initialState: {
		image: "",
		title: "",
		subtitle: "",
		tags: [],
		sales: [],
	},
	reducers: {
		fetchData: (state) => {
			console.log("thunk goes here");
		},
	},
});

export const { fetchData } = fetchDataSlice.actions;

export default fetchDataSlice.reducer;
