import axios from "axios";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import MainCanvas from "./components/MainCanvas";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import fetchDataAsync from "./store/fetchDataSlice";

const getMonthName = (dateString) => {
	const options = { month: "short" };
	const date = Date.parse(dateString);
	return new Intl.DateTimeFormat("en-US", options).format(date).toUpperCase();
};

function App() {
	const imgUrl = useSelector((state) => state.fetchData.image);
	const title = useSelector((state) => state.fetchData.title);
	const subtitle = useSelector((state) => state.fetchData.subtitle);
	const tags = useSelector((state) => state.fetchData.tags);
	const sales = useSelector((state) => state.fetchData.sales);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchDataAsync());
	}, []);

	const parsedSales = sales.map((salesInfo) => ({
		...salesInfo,
		month: getMonthName(salesInfo.weekEnding),
	}));

	return (
		<>
			<NavBar />
			<div className="row d-flex p-3">
				<SideBar
					imgUrl={imgUrl}
					title={title}
					subtitle={subtitle}
					tags={tags}
				/>
				<MainCanvas sales={parsedSales} />
			</div>
		</>
	);
}

export default App;
