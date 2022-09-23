import productImg from "../resources/logo192.png";

const SideBar = () => {
	return (
		<div className="col bg-info p-3 m-3 shadow rounded">
			<img src={productImg} />
			<h3>Product Name</h3>
			<p>Product Description</p>
			<hr />
			<p>
				{["tag 1", "tag 2", "tag 3", "tag 4"].map((tag) => (
					<span class="badge bg-primary">{tag}</span>
				))}
			</p>
			<hr />
		</div>
	);
};

export default SideBar;
