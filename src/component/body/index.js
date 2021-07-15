import React from "react";
import { Route } from "react-router-dom";
import { HomePage } from "component/page-home";
import { CodePage } from "component/page-code";
import { ExperiencePage } from "component/page-experience";
import { GoalsPage } from "component/page-goals";
import { ContactPage } from "component/page-contact";
import "./index.scss";

export class Body extends React.Component {
	render() {
		return (
			<main className="main Body">
				<Route path="/" exact component={HomePage} />
				<Route path="/home" exact component={HomePage} />
				<Route path="/code" component={CodePage} />
				<Route path="/experience" component={ExperiencePage} />
				<Route path="/goals" component={GoalsPage} />
				<Route path="/contact" component={ContactPage} />
			</main>
		);
	}
}
