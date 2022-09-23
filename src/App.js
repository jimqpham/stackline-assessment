import axios from "axios";
import MainCanvas from "./components/MainCanvas";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
	axios.get("data.json").then((res) => console.log(res.data));

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
