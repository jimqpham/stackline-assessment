import Logo from "../resources/stackline_logo.svg";

const NavBar = () => {
	return (
		<nav
			className="navbar navbar-expand-sm"
			style={{ backgroundColor: "#052849" }}
		>
			<a className="navbar-brand col-sm-1">
				<img
					src={Logo}
					style={{ height: 50, marginLeft: 80 }}
					alt="brand logo"
				/>
			</a>
		</nav>
	);
};

export default NavBar;
