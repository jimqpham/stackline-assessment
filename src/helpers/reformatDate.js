const reformatDate = (dateStr) => {
	return `${dateStr.substring(5)}-${dateStr.substring(2, 4)}`;
};

export default reformatDate;
