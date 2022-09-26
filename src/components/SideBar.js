import { useSelector } from "react-redux";

const SideBar = () => {
	const imgUrl = useSelector((state) => state.fetchData.image);
	const title = useSelector((state) => state.fetchData.title);
	const subtitle = useSelector((state) => state.fetchData.subtitle);
	const tags = useSelector((state) => state.fetchData.tags);

	return (
		<div
			className="col-sm-2 p-3 m-3 shadow rounded"
			style={{ backgroundColor: "#ffffff" }}
		>
			<img src={imgUrl} width="100%" alt="product" />
			<h3 className="text-center">{title}</h3>
			<p className="text-center">{subtitle}</p>
			<hr />
			<p className="text-left">
				{tags.map((tag) => (
					<span key={tag} className="badge bg-light" style={{ color: "black" }}>
						{tag}
					</span>
				))}
			</p>
			<hr />
		</div>
	);
};

export default SideBar;
