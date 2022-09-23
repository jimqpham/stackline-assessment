import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchDataAsync = createAsyncThunk("products/getProduct", async () => {
	const res = await axios({
		method: "get",
		url: "/data.json",
	});

	return res.data[0];
});

export const fetchDataSlice = createSlice({
	name: "fetchData",
	initialState: {
		image: "",
		title: "",
		subtitle: "",
		tags: [],
		sales: [],
	},
	extraReducers: {
		[fetchDataAsync.fulfilled]: (state, action) => {
			const { image, title, subtitle, tags, sales } = action.payload;
			return { ...state, image, title, subtitle, tags, sales };
		},
	},
});

export const fetchDataReducer = fetchDataSlice.reducer;

export default fetchDataAsync;
