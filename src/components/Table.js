import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import reformatDate from "../helpers/reformatDate";
import sortSales from "../helpers/sortSales";

const Table = () => {
	const initialSales = useSelector((state) => state.fetchData.sales);
	const [sales, setSales] = useState(initialSales);
	const [sortIndex, setSortIndex] = useState(0);

	useEffect(() => {
		if (initialSales.length > 0) setSales(initialSales);
	}, [initialSales]);

	const sortUsingIndex = (sortIndex) => {
		setSortIndex(sortIndex);
		setSales((prevSales) =>
			prevSales.length === 0 ? [] : sortSales(prevSales, sortIndex)
		);
	};

	return (
		<table class="table">
			<thead>
				<tr>
					{[
						["WEEK ENDING", "text-left"],
						["RETAIL SALES", "text-center"],
						["WHOLESALE SALES", "text-center"],
						["UNITS SOLD", "text-center"],
						["RETAILER MARGIN", "text-center"],
					].map(([field, alignment], index) => (
						<th
							scope="col"
							className={alignment}
							onClick={() => sortUsingIndex(index)}
							style={{ cursor: "pointer" }}
						>
							{field} {index === sortIndex ? "▼" : "▽"}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{sales.map((record) => (
					<tr>
						<td>{reformatDate(record.weekEnding)}</td>
						<td className="text-center">{`$${record.retailSales.toLocaleString()}`}</td>
						<td className="text-center">{`$${record.wholesaleSales.toLocaleString()}`}</td>
						<td className="text-center">{record.unitsSold}</td>
						<td className="text-center">{`$${record.retailerMargin.toLocaleString()}`}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
