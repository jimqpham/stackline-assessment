import Chart from "./Chart";
import Table from "./Table";

const MainCanvas = (props) => {
	return (
		<div className="col p-3">
			<div
				className="bg-success p-3 shadow rounded"
				style={{ minHeight: "50vh" }}
			>
				<h3>Retail Sales</h3>
				<Chart sales={[...props.sales]} />
			</div>
			<div className="bg-warning p-3 shadow rounded">
				<Table sales={[...props.sales]} />
			</div>
		</div>
	);
};

export default MainCanvas;
