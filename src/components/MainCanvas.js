import { LineChart, XAxis, Line, Tooltip } from "recharts";
import Table from "./Table";

const MainCanvas = (props) => {
	return (
		<div className="col p-3">
			<div className="bg-success p-3 shadow rounded">
				<h3>Retail Sales</h3>
				<LineChart width={1300} height={500} data={props.sales}>
					<XAxis dataKey="month" />
					<Line
						type="monotone"
						dataKey="retailSales"
						stroke="#ff7300"
						yAxisId={0}
					/>
					<Line
						type="monotone"
						dataKey="retailerMargin"
						stroke="#ff7300"
						yAxisId={1}
					/>
					<Tooltip />
				</LineChart>
			</div>
			<div className="bg-warning p-3 shadow rounded">
				<Table sales={props.sales} />
			</div>
		</div>
	);
};

export default MainCanvas;
