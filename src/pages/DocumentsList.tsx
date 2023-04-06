import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import css from './DocumentsList.module.css';

const DocumentsList = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot='start'>
						<IonBackButton defaultHref='/tabs/documents' />
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
                    <div className={css.documents_box}>
                        <div className={css.title}>
                            Mes documents
                        </div>
                        <div className={css.doc}>

                        </div>
                    </div>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default DocumentsList;
