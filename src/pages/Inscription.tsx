import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonContent, IonTitle, IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';
import css from './Inscription.module.css';
import { Link } from 'react-router-dom';

const Inscription = () => {
	return (
		<IonPage>
			<IonContent>
				<div className={css.main_container}>
					<div className={css.imgDiv}>
						<img src={require('../images/logo.png')} alt='logo' />
					</div>
					<div className={css.inputs}>
						<IonItem fill='outline'>
							<IonLabel position='floating'>Login</IonLabel>
							<IonInput placeholder='Enter your login'></IonInput>
						</IonItem>
						<IonItem fill='outline'>
							<IonLabel position='floating'>Email</IonLabel>
							<IonInput type='email' placeholder='Enter your email address'></IonInput>
						</IonItem>
						<IonItem fill='outline'>
							<IonLabel position='floating'>Mot de passe</IonLabel>
							<IonInput type='password' placeholder='Enter your password'></IonInput>
						</IonItem>
						<IonItem fill='outline'>
							<IonLabel position='floating'>Confirmer le mot de passe</IonLabel>
							<IonInput placeholder='Enter your password'></IonInput>
						</IonItem>
					</div>
					<div className={css.btn}>
						<button className={css.signBtn}>
							<Link to='/tabs/home' style={{ color: 'white', textDecoration: 'none' }}>
								S'inscrire
							</Link>
						</button>
					</div>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Inscription;
