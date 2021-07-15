import React from "react";
import "./index.scss";
import { withTranslation } from "react-i18next";
import JobExperience from "resource/page-experience/experience.json";

const Translatable = withTranslation();

class ExperienceTableComponent extends React.Component {
	render() {
		const { t } = this.props;
		return (
			<table className="table table-responsive table-striped ExperienceTable">
				<thead>
					<tr>
						<th>{t("Empresa")}</th>
						<th>{t("Tecnologías front-end")}</th>
						<th>{t("Tareas front-end")}</th>
						<th>{t("Tecnologías back-end")}</th>
						<th>{t("Tareas back-end")}</th>
						<th>{t("Otras tecnologías")}</th>
						<th>{t("Otras tareas")}</th>
					</tr>
				</thead>
				<tbody>
					{JobExperience.experiences.map((experience, index) => {
						return (
							<tr key={index}>
								<td>{t(experience.company)}</td>
								<td>{t(experience.technologies.client)}</td>
								<td>{t(experience.tasks.client)}</td>
								<td>{t(experience.technologies.server)}</td>
								<td>{t(experience.tasks.server)}</td>
								<td>{t(experience.technologies.others)}</td>
								<td>{t(experience.tasks.others)}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	}
}

class ExperiencePageComponent extends React.Component {
	render() {
		const { t } = this.props;
		return (
			<section className="Page ExperiencePage">
				<h1 className="Title">{t("Experiencia")}</h1>
				<h3 className="Subtitle">
					{t("El aprendizaje es un tesoro que seguirá a su dueño a cualquier lado. (Proverbio chino)")}
				</h3>
				<main className="Contents">
					<p>{t("A continuación expongo todos los trabajos que he tenido como desarrollador")}.</p>
					<p>{t("Sin embargo, he jugado más con la tecnología de lo que aquí se muestra")}.</p>
					<ExperienceTable />
					<p>{t("Por otro lado, tengo más de 60 módulos de software compartidos en")} <a href="https://github.com/allnulled">Github</a>.</p>
					<p>{t("Puedo crear páginas web con Wordpress y Joomla desde 200 euros")}.</p>
					<p>{t("Y sigo actualizándome en las más nuevas tecnologías, aunque de todo no sé, y sigo aprendiendo")}.</p>
				</main>
			</section>
		);
	}
}

export const ExperiencePage = Translatable(ExperiencePageComponent);
export const ExperienceTable = Translatable(ExperienceTableComponent);
