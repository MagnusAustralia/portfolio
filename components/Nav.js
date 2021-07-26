import Link from "next/link";
<<<<<<< HEAD
=======
import styles from "../styles/Nav.module.css";
>>>>>>> 7adc71e831af742df9f4555e1d1f39c271b90be2

const Nav = () => {
	return (
		<nav>
<<<<<<< HEAD
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/records">Records</Link>
				</li>
			</ul>
=======
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
>>>>>>> 7adc71e831af742df9f4555e1d1f39c271b90be2
		</nav>
	);
};

export default Nav;
