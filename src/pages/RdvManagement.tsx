import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonToolbar } from "@ionic/react"
import css from './RdvManagement.module.css';

const RdvManagement = () => {
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
                    <div className={css.logo_div}>
                        <img src={require('../images/logo.png')} alt='logo' />
                    </div>
                    <div className={css.rdv_box}>
                        <img src={require('../images/homeRdv.png')} />
                        <div className={css.header}>
                            Mes rendez-vous
                        </div>
                        <div className={css.footer}>
                            Modifier
                        </div>
                    </div>
                </div>
            </IonContent>
			</IonPage>
		);
}

export default RdvManagement;