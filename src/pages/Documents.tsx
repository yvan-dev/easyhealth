import { IonContent, IonIcon, IonPage } from '@ionic/react';
import css from './Documents.module.css';
import { addCircle } from 'ionicons/icons';
import { Link } from 'react-router-dom';

const Documents = () => {
	return (
		<IonPage>
			<IonContent>
				<div className='main_container'>
					<div className={css.logo_text}>
						Easy
						<span className={css.logo_text} style={{ color: 'white' }}>
							Health.
						</span>
					</div>
					<div className={css.documents_box}>
						<Link to='/tabs/documents/all' style={{textDecoration: 'none'}}>
							<div className={css.header}>
								<div className={css.image}></div>
								<div className={css.text}>Mes documents</div>
							</div>
						</Link>
						<div className={css.add_doc}>
							<IonIcon icon={addCircle} color='primary' className={css.icon} />
							<div className={css.text}>Insérer un fichier</div>
						</div>
					</div>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Documents;
