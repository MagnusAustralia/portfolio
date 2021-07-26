import Link from "next/link";
import styles from "../styles/Nav.module.css";

const Nav = () => {
	return (
		<nav>
			<div className={styles.nav}>
				<ul>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/learn">Learn</Link>
					</li>
					<li>
						<Link href="/records">Records</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
