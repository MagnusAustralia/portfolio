import Meta from "./Meta";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
	return (
		<>
			<Meta />
			<div>
				<main>{children}</main>
			</div>
		</>
	);
};

export default Layout;
