import { IonContent, IonPage } from '@ionic/react';
import css from './Account.module.css';
import { Link } from 'react-router-dom';

const Account = () => {
	const user = { name: 'John Doe', birthday: '02/05/1960', address: '38 rue Molière, 94200 Ivry-sur-seine', email: 'upchh@example.com', password: '12', doctor: 'Jean Dupont' };
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
							<img src={require('../images/default_avatar.png')} />
							{user.name}
						</div>
						<div className={css.info}>
							<div>
								<span className={css.title}>Date de naissance : </span> {user.birthday}
							</div>
							<div>
								<span className={css.title}>Adresse : </span> {user.address}
							</div>
							<div>
								<span className={css.title}>Email : </span> {user.email}
							</div>
							<div>
								<span className={css.title}>Mot de passe : </span> {'******'}
							</div>
							<div>
								<span className={css.title}>Médecin traitant : </span> {user.doctor}
							</div>
						</div>
					</div>
					<Link to='/login' className={css.logout}>
						Se déconnecter
					</Link>
					<Link to='/tabs/account/contact' className={css.contact_us}>
						Nous contacter
					</Link>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Account;
