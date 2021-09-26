import React from "react";
import styles from "../styles/Links.module.css";

const Links = () => {
	return (
		<div className={styles.container}>
			<h1>Portfolio Home</h1>
			<p>
				<a href="http://learn-numbers.william-portfolio.design">
					Check out my site that helps learning numbers
				</a>
				<br />
				<br />
				<a href="http://slightly-useful.william-portfolio.design">
					Check out my site for some slightly useful things
				</a>
				<br />
				<br />
				<a href="http://study-review.william-portfolio.design">
					Check out my site for some yearly subject reviews
				</a>
				<br />
				<br />
				<a href="http://homework.william-portfolio.design">
					Check out my site for recording homework
				</a>
				<br />
				<br />
				<a href="http://cadets.william-portfolio.design">
					Check out my site for cadets (@229 Squadron)
				</a>
			</p>
		</div>
	);
};

export default Links;
