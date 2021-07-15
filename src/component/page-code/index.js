import React from "react";
import "./index.scss";
import IconNPM from "resource/image/npm.jpeg";
import IconGithub from "resource/image/github.jpg";
import { withTranslation } from "react-i18next";

const Translatable = withTranslation();

class CodePageComponent extends React.Component {
	render() {
		const { t } = this.props;
		return (
			<section className="Page CodePage">
				<h1 className="Title">{t("Código")}</h1>
				<h3 className="Subtitle">{t("Hablar es barato... ¡Enséñame el código! (Linus Torvald)")}</h3>
				<main className="Contents">
					<p>{t("Como desarrollador, intento reusar el código que creo")}.</p>
					<p>{t("Como desarrollador, procuro contribuir en la comunidad del Código Abierto")}.</p>
					<p>{t("Para ello, me valgo de estas dos plataformas")}:</p>
					<hr/>
					<ul>
						<li className="CodeBlock">
							<a className="CodeLink" href="https://www.npmjs.com/~allnulled" target="_blank" rel="noopener noreferrer">
								<img className="CodeIcon" src={IconNPM} alt="NPM" />
							</a>
							<p className="CodeIconText">{t("Con NPM puedo reusar los módulos que escribo en JavaScript, que son casi todos")}.</p>
						</li>
						<li className="CodeBlock">
							<a className="CodeLink" href="https://github.com/allnulled" target="_blank" rel="noopener noreferrer">
								<img className="CodeIcon" src={IconGithub} alt="Github" />
							</a>
							<p className="CodeIconText">{t("Aunque Microsoft adquirió esta plataforma, sigue siendo un lugar idóneo para compartir código hoy en día")}.</p>
						</li>
					</ul>
					<hr/>
					<p>{t("Puedes visitar mis perfiles en cada una de estas plataformas clicando en los iconos")}.</p>
				</main>
			</section>
		);
	}
}

export const CodePage = Translatable(CodePageComponent);
