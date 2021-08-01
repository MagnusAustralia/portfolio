import React from "react";
import styles from "../styles/Links.module.css";

const Links = () => {
	return (
		<div className={styles.container}>
			<h1>Portfolio Home</h1>
			<a href="http://learn-numbers.william-portfolio.design">
				Check out my site that helps learning numbers
			</a>
			<br />
			<a href="http://slightlyuseful.william-portfolio.design">
				Check out my site for some slightly useful things
			</a>
		</div>
	);
};

export default Links;
