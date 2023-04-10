import { IonPage, IonHeader, IonToolbar, IonContent, IonTitle, IonItem, IonLabel, IonInput, IonButton, IonProgressBar, IonToast } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import css from './Login.module.css';
import { Link } from 'react-router-dom';
import { Storage } from '@ionic/storage';
import rest from '../API/rest';
import { useStorage } from '../hooks/useStorage';

const Login = () => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const { setItem } = useStorage('userEmail');

	const inputLoginChange = (event) => {
		setLogin(event.target.value);
	};

	const inputPasswordChange = (event) => {
		setPassword(event.target.value);
	};

	useEffect(() => {
		if (loading) getLogin();
	}, [loading]);

	const handleLogin = async () => {
		setLoading(true);
	};

	const getLogin = async () => {
		const response = await rest.login({
			adresseMail: login,
			motDePasse: password,
		});
		if (response.status === 200) {
			await setItem('userEmail', login);
			window.location.href = '/tabs/home';
		} else {
			setError(true);
		}
		setLoading(false);
	};

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
							<IonInput onIonChange={inputLoginChange} placeholder='Enter your login'></IonInput>
						</IonItem>
						<IonItem fill='outline'>
							<IonLabel position='floating'>Mot de passe</IonLabel>
							<IonInput onIonChange={inputPasswordChange} placeholder='Enter your password'></IonInput>
						</IonItem>
					</div>
					<div className={css.btns}>
						<button className={css.loginBtn} onClick={handleLogin}>
							Connexion
						</button>
						<button className={css.signBtn}>
							<Link to='/inscription' style={{ color: 'white', textDecoration: 'none' }}>
								Inscription
							</Link>
						</button>
					</div>
				</div>
				<IonToast isOpen={error} message='Login ou mot de passe incorrect' duration={2000} position='top'></IonToast>
			</IonContent>
		</IonPage>
	);
};

export default Login;
