import { IonContent, IonPage } from '@ionic/react';
import css from './Account.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useStorage } from '../hooks/useStorage';
import rest from '../API/rest';
import { calendarNumberSharp } from 'ionicons/icons';

const Account = () => {
	const user = { name: 'John Doe', birthday: '02/05/1960', address: '38 rue Molière, 94200 Ivry-sur-seine', email: 'upchh@example.com', password: '12', doctor: 'Benoit Jacquart' };
	const [patient, setPatient] = useState(null);
	const [image, setImage] = useState('');
	const [medecin, setMedecin] = useState(null);
	const { data, removeItem } = useStorage('userEmail');

	useEffect(() => {
		const getUser = async () => {
			const response = await rest.getUser(data);
			const patient = await response.json();
			const consultations = patient.consultations;
			consultations.length > 0 && setMedecin(consultations[0].medecinNom);
			setImage(patient.photoProfil);
			setPatient(patient);
		};
		data != undefined && getUser();
	}, [data])


	const logout = async () => {
		await removeItem('userEmail');
		window.location.href = '/login';
	};

	return (
		<IonPage>
			<IonContent>
				<div className='main_container'>
					<div className={css.logoDiv}>
						<img src={require('../images/logo.png')} alt='logo' />
					</div>
					<div className={css.header_div}>
						Mon compte
						<button className={css.update_btn}>Modifier</button>
					</div>
					<div className={css.info_container}>
						<div className={css.header}>
							<img src={image != '' ? `data:image/png;base64,${image}` : '../images/default_avatar.png'} />
							{`${patient?.prenom} ${patient?.nom}`}
						</div>
						<div className={css.info}>
							<div>
								<span className={css.title}>Date de naissance : </span> {user.birthday}
							</div>
							<div>
								<span className={css.title}>Adresse : </span> {user.address}
							</div>
							<div>
								<span className={css.title}>Email : </span> {patient?.adresseMail}
							</div>
							<div>
								<span className={css.title}>Mot de passe : </span> {'******'}
							</div>
							<div>
								<span className={css.title}>Médecin traitant : </span> {medecin !== null ? `Dr. ${medecin}` : 'Aucun médecin'}
							</div>
						</div>
					</div>
					<div onClick={logout} className={css.logout}>
						Se déconnecter
					</div>
					<Link to='/tabs/account/contact' className={css.contact_us}>
						Nous contacter
					</Link>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Account;
