import { useSelector } from "react-redux";
import { LineSeries, XAxis, FlexibleWidthXYPlot } from "react-vis";
import moment from "moment";
import "../../node_modules/react-vis/dist/style.css";

const Chart = () => {
	const sales = useSelector((state) => state.fetchData.sales);

	const retailSales = sales.map((record) => ({
		x: new Date(Date.parse(record.weekEnding)),
		y: record.retailSales,
	}));

	const wholesaleSales = sales.map((record) => ({
		x: new Date(Date.parse(record.weekEnding)),
		y: record.wholesaleSales,
	}));

	return (
		<FlexibleWidthXYPlot xType="time" height={400}>
			<XAxis
				tickFormat={(value) => moment(value).format("MMM").toUpperCase()}
				style={{ text: { stroke: "none", fill: "#000", fontSize: 15 } }}
				tickSizeInner={0}
			/>
			<LineSeries
				data={retailSales}
				curve={"curveMonotoneX"}
				color="#42a6f5"
				strokeWidth={4}
			/>
			<LineSeries
				data={wholesaleSales}
				curve={"curveMonotoneX"}
				color="#9aa5be"
				strokeWidth={4}
			/>
		</FlexibleWidthXYPlot>
	);
};

export default Chart;
