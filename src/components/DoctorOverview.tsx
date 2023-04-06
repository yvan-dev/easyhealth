import css from './DoctorOverview.module.css'


const DoctorOverview = (props) => {
    return (
			<div className={css.container}>
				<span className={css.name}>{props.name}</span>
            <div className={css.photo}>
                <img src={require('../images/doctor_default.png')} alt={props.name} />
                </div>
				<span className={css.specialty}>{props.specialty}</span>
			</div>
		);
}

export default DoctorOverview