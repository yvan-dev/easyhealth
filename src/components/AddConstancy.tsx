import { IonIcon, IonProgressBar } from '@ionic/react';
import { timeOutline } from 'ionicons/icons';
import React from 'react';
import css from './AddConstancy.module.css';
import { Link } from 'react-router-dom';

const AddConstancy = (props) => {
	return (
		<>
			<div className={props.imageClassName}></div>
			<div className={css.right}>
				<Link to={`/tabs/home/newConstancy/${props.patho?.libelle}`} className={css.link}>
				<div className={css.title}>Ajouter une mesure ?</div>
				<div className={css.remain_time}>
					<IonIcon aria-hidden='true' icon={timeOutline} />
					<span>&nbsp;{props.remainingTime} heures</span>
				</div>
				<div className={css.progress}>
					<IonProgressBar value={props.progress}></IonProgressBar>
					&nbsp;&nbsp;{props.progress}%
					</div>
					</Link>
			</div>
		</>
	);
};

export default AddConstancy;
