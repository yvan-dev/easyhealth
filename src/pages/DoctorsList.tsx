import { Link } from 'react-router-dom';
import DoctorOverview from '../components/DoctorOverview';
import css from './DoctorList.module.css';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonList, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import rest from '../API/rest';

const DoctorList = () => {
	// const doctors = [
	// 	{ id: 1, name: 'Dr. Jean Dupont', specialty: 'Médecin généraliste', photo: '../images/doctor1.png' },
	// 	{ id: 2, name: 'Dr. Marie Dupont', specialty: 'Médecin généraliste', photo: '../images/doctor2.png' },
    //     { id: 3, name: 'Dr. Benoit Jacquart', specialty: 'Dermatologue', photo: null },
    //     { id: 4, name: 'Dr. Jean Dupont', specialty: 'Médecin généraliste', photo: '../images/doctor1.png' },
	// ];
	const [doctors, setDoctors] = useState([]);

	useEffect(() => {
		const getDoctors = async () => {
			const response = await rest.getDoctors();
			const doctors = await response.json();
			setDoctors(doctors);
		};
		getDoctors();
	}, [])


	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<div className={css.toolbar}>
						<IonSearchbar animated={true} className={css.custom} placeholder='Nom, prénom, spécialité'></IonSearchbar>
					</div>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<div className={'main_container'}>
					<div className={css.logo_text}>
						Easy
						<span className={css.logo_text} style={{ color: 'white' }}>
							Health.
						</span>
					</div>
					<div className={css.doctors_box}>
						<IonContent>
							<IonList lines='none' className={css.ion_list}>
								{doctors?.map((doctor, key) => {
									return (
										<Link to={`/tabs/doctors_list/doctor_details/${doctor.adresseMail}`} key={key} style={{textDecoration: 'none'}}>
											<IonItem>
												<DoctorOverview name={doctor.nom} specialty={doctor.specialite} photo={doctor.photoProfil} />
											</IonItem>
										</Link>
									);
								})}
							</IonList>
						</IonContent>
					</div>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default DoctorList;
