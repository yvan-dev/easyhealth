import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import css from './RdvSuccess.module.css';
import { Link } from 'react-router-dom';

const RdvSuccess = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot='start'>
						<IonBackButton defaultHref='/tabs/Home'/>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<div className='main_container'>
					<div className={css.logo_text}>
						Easy
						<span className={css.logo_text} style={{ color: 'white' }}>
							Health.
						</span>
					</div>
					<div className={css.rdv_box}>
						<div className={css.infos_box}>
							<div className={css.header}>Votre Rendez-vous a bien été pris en compte !</div>
							<img src={require('../images/logo_color.png')} />
							<div className={css.footer}>Pour modifier la date ou heure de votre RDV appuyer sur le bouton modifier.</div>
						</div>
						<div className={css.rdv}>
							<Link to='/tabs/doctors_list/doctor_details/1/rdv/confirm' className={css.link}>
								Modifier
							</Link>
						</div>
					</div>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default RdvSuccess;
