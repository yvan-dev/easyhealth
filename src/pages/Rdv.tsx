import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, IonDatetime, IonButton } from '@ionic/react';
import css from './Rdv.module.css';
import { Link } from 'react-router-dom';

const Rdv = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot='start'>
						<IonBackButton defaultHref='/tabs/doctors_list/doctor_details/1' />
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<div className='main_container'>
					{/* <div className={css.logo_text}>
						Easy
						<span className={css.logo_text} style={{ color: 'white' }}>
							Health.
						</span>
					</div> */}
					<div className={css.rdv_box}>
						<div className={css.date}>
							<span className={css.title}>Selectionner la date</span>
							<IonDatetime presentation='date' showDefaultTitle={false}></IonDatetime>
						</div>
						<div className={css.time}>
							<span className={css.title}>Selectionner l'heure</span>
							<IonDatetime presentation='time'></IonDatetime>
						</div>
						<div className={css.rdv}>
							<Link to='/tabs/doctors_list/doctor_details/1/rdv/confirm' className={css.link}>
								Valider
							</Link>
						</div>
					</div>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Rdv;
