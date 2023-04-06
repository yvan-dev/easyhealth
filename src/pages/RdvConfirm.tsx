import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import css from './RdvConfirm.module.css';
import { Link } from 'react-router-dom';

const RdvConfirm = () => {
	const rdvInfos = {
		date: '12/12/2020',
		time: '12:00',
		doctor: 'Dr. Mohamed',
		speciality: 'Cardiologue',
		address: 'Rue 1, Casablanca',
		tel: '06 12 34 56 78',
	};
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot='start'>
						<IonBackButton defaultHref='/tabs/doctors_list/doctor_details/1/rdv' />
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
							<div className={css.header}>Confirmation de RDV</div>
							<div className={css.infos}>
								<div className={css.text}>
									<span className={css.title}>Date : </span>
									{rdvInfos.date}
								</div>
								<div className={css.text}>
									<span className={css.title}>Heure : </span>
									{rdvInfos.time}
								</div>
								<div className={css.text}>
									<span className={css.title}>Docteur : </span>
									{rdvInfos.doctor}
								</div>
								<div className={css.text}>
									<span className={css.title}>Spécialité : </span>
									{rdvInfos.speciality}
								</div>
								<div className={css.text}>
									<span className={css.title}>Adresse : </span>
									{rdvInfos.address}
								</div>
								<div className={css.text}>
									<span className={css.title}>Téléphone : </span>
									{rdvInfos.tel}
								</div>
							</div>
						</div>
						<div className={css.rdv}>
							<Link to='/tabs/doctors_list/doctor_details/1/rdv/confirm/success' className={css.link}>
								Confirmer
							</Link>
						</div>
					</div>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default RdvConfirm;
