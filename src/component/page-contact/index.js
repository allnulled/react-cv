import React from "react";
import GmailImage from "resource/image/mail.png";
import WhatsappImage from "resource/image/whatsapp.png";
import TelephoneImage from "resource/image/telephone.png";
import "./index.scss";
import { withTranslation } from "react-i18next";

const Translatable = withTranslation();

class ContactPageComponent extends React.Component {
	render() {
		const { t } = this.props;
		return (
			<section className="Page ContactPage">
				<h1 className="Title">{t("Contacto")}</h1>
				<h3 className="Subtitle">{t("La creación de mil bosques está en una bellota. (Ralph Waldo Emerson)")}</h3>
				<main className="Contents">
					<p>{t("Puedes contactar conmigo a través de cualquiera de estas vías")}:</p>
					<div className="ContactList">
						<ul>
							<li>
								<a href="mailto:carlosjimenohernandez@gmail.com" target="_blank" rel="noopener noreferrer">
									<img className="ContactIcon" src={GmailImage} alt="Imagen Gmail" />
									<span>carlosjimenohernandez@gmail.com</span>
								</a>
							</li>
							<li>
								<a href="https://api.whatsapp.com/send?phone=0034619982622" target="_blank" rel="noopener noreferrer">
									<img className="ContactIcon" src={WhatsappImage} alt="Imagen Whatsapp" />
									<span>(+34) 619982622</span>
								</a>
							</li>
							<li>
								<a href="tel:0034619982622" target="_blank" rel="noopener noreferrer">
									<img className="ContactIcon" src={TelephoneImage} alt="Imagen teléfono" />
									<span>(+34) 619982622</span>
								</a>
							</li>
						</ul>
					</div>
					<p className="ContactLastMessage">{t("Saludos")}.</p>
				</main>
			</section>
		);
	}
}

export const ContactPage = Translatable(ContactPageComponent);