const mappings = [
	"weekEnding",
	"retailSales",
	"wholesaleSales",
	"unitsSold",
	"retailerMargin",
];

const sortSales = (sales, sortColInd) => {
	const sortCol = mappings[sortColInd];

	// console.log("devug " + typeof sales[0][sortCol]);

	if (typeof sales[0][sortCol] === "string") {
		// console.log("hehe");
		return [...sales].sort((s1, s2) => {
			return s1[sortCol] === s2[sortCol]
				? 0
				: s1[sortCol] < s2[sortCol]
				? -1
				: 1;
		});
	}

	return [...sales].sort((s1, s2) => {
		return s1[sortCol] - s2[sortCol];
	});
};

export default sortSales;
