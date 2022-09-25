import { useState } from "react";
import reformatDate from "../helpers/reformatDate";
import sortSales from "../helpers/sortSales";

const Table = (props) => {
	console.log(props.sales);
	const [sales, setSales] = useState(props.sales);

	const sort = (sortIndex) => {
		setSales((prevSales) => sortSales(prevSales, sortIndex));
	};

	return (
		<table class="table">
			<thead>
				<tr>
					{[
						"WEEK ENDING",
						"RETAIL SALES",
						"WHOLESALE SALES",
						"UNITS SOLD",
						"RETAILER MARGIN",
					].map((field, index) => (
						<th scope="col" onClick={() => sort(index)}>
							{field}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{sales.map((record) => (
					<tr>
						<td>{reformatDate(record.weekEnding)}</td>
						<td>{`$${record.retailSales.toLocaleString()}`}</td>
						<td>{`$${record.wholesaleSales.toLocaleString()}`}</td>
						<td>{record.unitsSold}</td>
						<td>{`$${record.retailerMargin.toLocaleString()}`}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
