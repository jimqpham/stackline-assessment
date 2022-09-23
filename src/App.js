import axios from "axios";

import { useDispatch, useSelector } from "react-redux";

import MainCanvas from "./components/MainCanvas";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { fetchData } from "./store/fetchDataSlice";

function App() {
	const imgUrl = useSelector((state) => state.fetchData.image);
	const dispatch = useDispatch();

	dispatch(fetchData());

	return (
		<>
			<NavBar />
			<div className="row d-flex p-3">
				<SideBar />
				<MainCanvas />
			</div>
		</>
	);
}

export default App;
