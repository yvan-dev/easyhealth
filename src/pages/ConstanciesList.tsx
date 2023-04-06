import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent } from '@ionic/react';
import css from './ConstanciesList.module.css';
import Constancy from '../components/Constancy';

const ConstanciesList = () => {
	const periods = ['Matin', 'Midi', 'Soir'];
	const constancies = [
		{ title: 'Glycémie', value: '5.5' },
		{ title: 'Insuline', value: '5.5' },
	];
	const date = new Date();
	const today = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

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
						<div className={css.title}>Mes mesures</div>
						<div className={css.header}>
							<div className={css.title}>Aujourd’hui : ({today})</div>
							<img src={require('../images/diabete.png')} />
						</div>
						<div className={css.body}>
							{periods.map((period, key) => {
								return <Constancy period={period} key={key} constancies={constancies} />;
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
