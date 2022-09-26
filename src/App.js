import { useEffect } from "react";

import { useDispatch } from "react-redux";

import MainCanvas from "./components/MainCanvas";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import fetchDataAsync from "./store/fetchDataSlice";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchDataAsync());
	}, [dispatch]);

	return (
		<>
			<NavBar />
			<div className="row d-flex p-3 justify-content-center">
				<SideBar />
				<MainCanvas />
			</div>
		</>
	);
}

export default App;
