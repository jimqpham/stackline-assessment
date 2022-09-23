const Table = (props) => {
	return (
		<table class="table">
			<thead>
				<tr>
					<th scope="col">WEEK ENDING</th>
					<th scope="col">RETAIL SALES</th>
					<th scope="col">WHOLESALE SALES</th>
					<th scope="col">UNITS SOLD</th>
					<th scope="col">RETAILER MARGIN</th>
				</tr>
			</thead>
			<tbody>
				{props.sales.map((record) => (
					<tr>
						<td>{record.weekEnding}</td>
						<td>{record.retailSales}</td>
						<td>{record.wholesaleSales}</td>
						<td>{record.unitsSold}</td>
						<td>{record.retailerMargin}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
