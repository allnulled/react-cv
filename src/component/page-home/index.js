import React from "react";
import { Carousel } from "react-responsive-carousel";
import { withTranslation } from "react-i18next";
import imageSport from "resource/image/slide-sport.jpg";
import imageAnimals from "resource/image/slide-animals.jpg";
import imageCode from "resource/image/slide-code.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.scss";

const Translatable = withTranslation();

class HomePageComponent extends React.Component {
	render() {
		const { t } = this.props;
		const carouselSettings = {
			showStatus: false,
			showThumbs: false,
			infiniteLoop: true,
			autoPlay: true,
			transitionTime: 1000,
			emulateTouch: true
		};
		return (
			<section className="Page HomePage">
				<h1 className="Title">{t("Inicio")}</h1>
				<h3 className="Subtitle">{t("Bienvenidos a mi currículum web")}</h3>
				<main className="Contents">
					<p>{t("Soy Carlos Jimeno Hernández, desarrollador web")}.</p>
					<Carousel {...carouselSettings}>
						<div className="SlideOfCarousel">
							<div className="SlideContent">
								<img className="ImageOfSlide" src={imageSport} alt="Imagen de deporte" />
							</div>
							<div className="TextContent">
								<div className="TextOfSlide">
									<div className="TextFragment">{t("El deporte es saludable")}</div>
								</div>
							</div>
						</div>
						<div className="SlideOfCarousel">
							<div className="SlideContent">
								<img className="ImageOfSlide" src={imageAnimals} alt="Imagen de animales" />
							</div>
							<div className="TextContent">
								<div className="TextOfSlide">
									<div className="TextFragment">{t("Los animales son colegas")}</div>
								</div>
							</div>
						</div>
						<div className="SlideOfCarousel">
							<div className="SlideContent">
								<img className="ImageOfSlide" src={imageCode} alt="Imagen de código" />
							</div>
							<div className="TextContent">
								<div className="TextOfSlide">
									<div className="TextFragment">{t("Las máquinas ganaron hace mucho")}</div>
								</div>
							</div>
						</div>
					</Carousel>
					<p>{t("Esta sencilla aplicación web está creada con el framework React")}.</p>
					<p>{t("Puedes navegar por ella para saber un poco más de mí como desarrollador")}.</p>
					<p>{t("No soy diseñador")}. {t("Los estudios en España y Cataluña son de pago")}.</p>
					<p>{t("Esta aplicación tiene internacionalización, navegación, responsividad, y está creada a base de componentes React")}.</p>
				</main>
			</section>
		);
	}
}

export const HomePage = Translatable(HomePageComponent);
