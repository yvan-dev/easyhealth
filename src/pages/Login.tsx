import { IonPage, IonHeader, IonToolbar, IonContent, IonTitle, IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';
import React from 'react';
import css from './Login.module.css';
import { Link } from 'react-router-dom';

const Login = () => {
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
							<IonLabel position='floating'>Mot de passe</IonLabel>
							<IonInput placeholder='Enter your password'></IonInput>
						</IonItem>
					</div>
					<div className={css.btns}>
						<button className={css.loginBtn}>Connexion</button>
						<button className={css.signBtn}><Link to="/inscription" style={{color: 'white', textDecoration: 'none'}}>Inscription</Link></button>
					</div>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Login;
