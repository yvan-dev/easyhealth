import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import css from './Contact.module.css';
import { Link } from 'react-router-dom';

const Contact = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot='start'>
						<IonBackButton defaultHref='/tabs/account' />
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<div className='main_container'>
					<div className={css.logoDiv}>
						<img src={require('../images/logo.png')} alt='logo' />
					</div>
					<div className={css.header}>Nous contacter</div>
					<div className={css.subject}>Objet :</div>
					<div className={css.body}>Votre message</div>
					<Link to={'/tabs/account'} className={css.send_btn}>
						Envoyer
					</Link>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Contact;
