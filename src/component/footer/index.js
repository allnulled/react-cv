import React from "react";
import HeartIcon from "resource/image/heart.png";
import { withTranslation } from "react-i18next";
import "./index.scss";

const Translatable = withTranslation();

class FooterComponent extends React.Component {
	render() {
		const { t } = this.props;
		return (
			<footer className="Footer">
				<p>
					<span>{t("Desarrollado con")} </span>
					<img className="FooterIcon" src={HeartIcon} alt="amor" />
					<span> {t("por")}</span>
					<span> Carlos Jimeno Hernández</span>
				</p>
			</footer>
		);
	}
}

export const Footer = Translatable(FooterComponent);
