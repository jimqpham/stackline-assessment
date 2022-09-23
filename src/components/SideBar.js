import productImg from "../resources/logo192.png";

const SideBar = (props) => {
	return (
		<div className="col-lg-2 bg-info p-3 m-3 shadow rounded">
			<img src={props.imgUrl} width="100%" />
			<h3>{props.title}</h3>
			<p>{props.subtitle}</p>
			<hr />
			<p>
				{props.tags.map((tag) => (
					<span key={tag} className="badge bg-primary">
						{tag}
					</span>
				))}
			</p>
			<hr />
		</div>
	);
};

export default SideBar;
