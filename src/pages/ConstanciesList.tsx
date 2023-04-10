import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, IonInput } from '@ionic/react';
import css from './ConstanciesList.module.css';
import Constancy from '../components/Constancy';
import { useEffect, useState } from 'react';
import rest from '../API/rest';
import { useStorage } from '../hooks/useStorage';

const ConstanciesList = (props) => {
	const [constancies, setConstancies] = useState([]);
	const { data } = useStorage('userEmail');
	const periods = ['Matin', 'Midi', 'Soir'];

	useEffect(() => {
		const now = new Date();
		const month = now.getMonth() + 1;
		const monthString = month > 9 ? month.toString() : '0' + month;
		const today: string = now.getFullYear() + '-' + monthString + '-' + now.getDate();
		const getConstancies = async () => {
			const response = await rest.getConstancies(data, props.patho, today);
			const constancies = await response.json();
			setConstancies(constancies);
		};
		getConstancies();
	}, []);

	const onDateChange = async (e) => {
		const response = await rest.getConstancies(data, props.patho, e.detail.value);
		const constancies = await response.json();
		setConstancies(constancies);
	};

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot='start'>
						<IonBackButton defaultHref='/tabs/Home' />
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
					<div className={css.constancy_box}>
						<div className={css.title}>Mes mesures ({props.patho})</div>
						<div className={css.header}>
							<div className={css.date}>
								<p>Selectionner une date</p>
								<IonInput type='date' placeholder='Select a date' className={css.custom} onIonChange={onDateChange}></IonInput>
							</div>
							<img src={require('../images/diabete.png')} />
						</div>
						<div className={css.body}>
							{periods.map((period, key) => {
								return <Constancy period={period} key={key} constancies={constancies?.filter((constancy) => constancy.periode === period)} />;
							})}
						</div>
						<button>Modifier</button>
					</div>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default ConstanciesList;
