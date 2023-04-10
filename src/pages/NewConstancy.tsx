import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, IonIcon, IonProgressBar, IonInput, IonSelect, IonSelectOption, IonLabel } from '@ionic/react';
import css from './NewConstancy.module.css';
import { timeOutline } from 'ionicons/icons';

const NewConstancy = (props) => {
	const date = new Date();
	const today = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot='start'>
						<IonBackButton defaultHref='/tabs/Home'/>
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
						<div className={css.header}>
							<div className={css.left}>
								<img src={require('../images/diabete.png')} />
							</div>
							<div className={css.right}>
								<div className={css.title}>{props.patho}</div>
								<div className={css.text}>
									<IonIcon aria-hidden='true' icon={timeOutline} />
									<span>&nbsp;8 heures left</span>
								</div>
								<div className={css.progress}>
									<IonProgressBar value={20}></IonProgressBar>
								</div>
							</div>
						</div>
						<div className={css.body}>
							<div>
								<span className={css.title}>Date</span>
								<IonInput type='date' placeholder={'' + today} className={css.custom}></IonInput>
							</div>
							<div>
								<span className={css.title}>Période</span>
								<IonSelect interface='action-sheet' placeholder='Matin / Midi / soir'>
									<IonSelectOption value='matin'>Matin</IonSelectOption>
									<IonSelectOption value='midi'>Midi</IonSelectOption>
									<IonSelectOption value='soir'>Soir</IonSelectOption>
								</IonSelect>
							</div>
							<div>
								<span className={css.title}>Taux de glycémie</span>
								<IonInput type='number' placeholder='5.5' className={css.custom}></IonInput>
							</div>
							<div>
								<span className={css.title}>Taux de cholestérol</span>
								<IonInput type='number' placeholder='5.5' className={css.custom}></IonInput>
							</div>
						</div>
						<div className={css.footer}>
							<button className={css.button}>Valider</button>
						</div>
					</div>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default NewConstancy;
