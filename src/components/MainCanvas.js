import Chart from "./Chart";
import Table from "./Table";

const MainCanvas = () => {
	return (
		<div className="col-sm-9 p-3">
			<div
				className="p-3 shadow rounded"
				style={{ minHeight: "50vh", backgroundColor: "#ffffff" }}
			>
				<h5>Retail Sales</h5>
				<Chart />
			</div>
			<div
				className="p-3 mt-5 shadow rounded"
				style={{ backgroundColor: "#ffffff" }}
			>
				<Table />
			</div>
		</div>
	);
};

export default MainCanvas;
