import css from './Constancy.module.css';

const Constancy = (props) => {
	return (
		<div className={css.container}>
			<div className={css.period}>{props.period}</div>
			{props.constancies.map((constancy, key) => {
				return (
					<div key={key} className={css.constancy}>
						<div className={css.title}>{constancy.title}</div>
						<div className={css.value}>{constancy.value}</div>
					</div>
				);
			})}
		</div>
	);
};

export default Constancy;
