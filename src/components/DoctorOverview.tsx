import css from './DoctorOverview.module.css';

const DoctorOverview = (props) => {
	const imageUrl = `data:image/png;base64,${props.photo}`;

	return (
		<div className={css.container}>
			<span className={css.name}>{props.name}</span>
			<div className={css.photo}>
				<img id='img' src={imageUrl} alt={props.name} />
			</div>
			<span className={css.specialty}>{props.specialty}</span>
		</div>
	);
};

export default DoctorOverview;
