import { LineSeries, XAxis, FlexibleWidthXYPlot, Hint } from "react-vis";
import moment from "moment";
import "../../node_modules/react-vis/dist/style.css";

const Chart = (props) => {
	const retailSales = props.sales.map((record) => ({
		x: new Date(Date.parse(record.weekEnding)),
		y: record.retailSales,
	}));

	const wholesaleSales = props.sales.map((record) => ({
		x: new Date(Date.parse(record.weekEnding)),
		y: record.wholesaleSales,
	}));

	return (
		<FlexibleWidthXYPlot xType="time" height={400}>
			<XAxis
				tickFormat={(value) => moment(value).format("MMM").toUpperCase()}
				style={{ text: { stroke: "none", fill: "#ffffff", fontSize: 15 } }}
				tickSizeInner={0}
			/>
			<LineSeries data={retailSales} curve={"curveMonotoneX"} />
			<LineSeries data={wholesaleSales} curve={"curveMonotoneX"} />
		</FlexibleWidthXYPlot>
	);
};

export default Chart;
