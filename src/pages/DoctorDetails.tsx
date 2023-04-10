import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import DoctorOverview from '../components/DoctorOverview';
import css from './DoctorDetails.module.css';
import { Link } from 'react-router-dom';
import rest from '../API/rest';
import { useEffect, useState } from 'react';

const DoctorDetails = (props) => {
	const [doctor, setDoctor] = useState(null);

	useEffect(() => {
		const getDoctor = async () => {
			const response = await rest.getDoctor(props.email);
			const doctor = await response.json();
			setDoctor(doctor);
		};
		getDoctor();
	}, []);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot='start'>
						<IonBackButton defaultHref='/tabs/doctors_list' />
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
					<div className={css.doctors_box}>
						<DoctorOverview name={doctor?.nom} specialty={doctor?.specialite} photo={doctor?.photoProfil} />
						<div className={css.additionnal_info}>
							<div>
								<span>Adresse : </span>19 Pl. des Muguets, 92000 Nanterre <br />
								<br />
							</div>
							<div>
								<span>Téléphone : </span>
								<a href={`tel:+${doctor?.numeroTelephone}`}>{doctor?.numeroTelephone}</a>
							</div>
						</div>
						<div className={css.rdv}>
							<Link to='/tabs/doctors_list/doctor_details/1/rdv' className={css.link}>Prendre un RDV</Link>
						</div>
					</div>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default DoctorDetails;
