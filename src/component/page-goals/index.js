import React from "react";
import "./index.scss";
import { withTranslation } from "react-i18next";

const Translatable = withTranslation();

class GoalsPageComponent extends React.Component {
	render() {
		const { t } = this.props;
		return (
			<section className="Page GoalsPage">
				<h1 className="Title">{t("Objetivos")}</h1>
				<h3 className="Subtitle">{t('Bueno y malo siempre dependen del "para qué"')}</h3>
				<main className="Contents">
					<p>{t("Los objetivos son, básicamente, la piedra angular de la ética")}.</p>
					<p>{t("Por esta razón, creo conveniente añadir este apartado, en el que expongo mis objetivos en el ámbito laboral")}.
					</p>
					<div className="GoalsList">
						<ul>
							<li><p>1. {t("Programación web fluida de cliente y servidor")}</p></li>
							<li><p>2. {t("Análisis, testeo, documentación y cobertura fluidos y suficientes")}</p></li>
							<li><p>3. {t("Trabajar desde casa como opción")}</p></li>
							<li><p>4. {t("Ir mejorando el sueldo")}</p></li>
							<li><p>5. {t("Otras prestaciones")}</p></li>
						</ul>
					</div>
					<p>{t("Casi siempre disfruto aprendiendo, pero el conocimiento parece que es un negocio más para demasiados humanos a día de hoy")}.</p>
					<p>{t("Valoro la colaboración, y por eso ayudo siempre a mis compañeros")}.</p>
					<p>{t("De igual modo, no disfruto al quitarle el tiempo a otros")}.</p>
				</main>
			</section>
		);
	}
}

export const GoalsPage = Translatable(GoalsPageComponent);
