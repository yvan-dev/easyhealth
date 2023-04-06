import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { triangle, ellipse, square, home, calendarClearOutline, folderOpenOutline, personOutline, homeOutline } from 'ionicons/icons';
import React from 'react';
import { Route, Redirect } from 'react-router';
import Login from '../pages/Login';
import Tab2 from '../pages/Tab2';
import Tab3 from '../pages/Tab3';
import Home from '../pages/Home';

import css from './MainTabs.module.css';
import DoctorList from '../pages/DoctorsList';
import DoctorDetails from '../pages/DoctorDetails';
import Documents from '../pages/Documents';
import DocumentsList from '../pages/DocumentsList';
import Account from '../pages/Account';
import Contact from '../pages/Contact';
import ConstanciesList from '../pages/ConstanciesList';
import NewConstancy from '../pages/NewConstancy';
import Rdv from '../pages/Rdv';
import RdvConfirm from '../pages/RdvConfirm';
import RdvSuccess from '../pages/RdvSuccess';
import RdvManagement from '../pages/RdvManagement';

const MainsTabs = () => {
	return (
		<IonTabs>
			<IonRouterOutlet>
				<Route exact path='/tabs/Home'>
					<Home />
				</Route>
				<Route path='/tabs/home/constanciesList'>
					<ConstanciesList />
				</Route>
				<Route path='/tabs/home/newConstancy'>
					<NewConstancy />
				</Route>
				<Route path='/tabs/home/rdvManagement'>
					<RdvManagement />
				</Route>
				<Route exact path='/tabs/doctors_list'>
					<DoctorList />
				</Route>
				<Route exact path='/tabs/doctors_list/doctor_details/:id' render={(props) => <DoctorDetails id={props.match.params.id} />} />
				<Route exact path='/tabs/doctors_list/doctor_details/:id/rdv'>
					<Rdv />
				</Route>
				<Route exact path='/tabs/doctors_list/doctor_details/:id/rdv/confirm'>
					<RdvConfirm />
				</Route>
				<Route path='/tabs/doctors_list/doctor_details/:id/rdv/confirm/success'>
					<RdvSuccess/>
				</Route>
				<Route exact path='/tabs/documents'>
					<Documents />
				</Route>
				<Route path='/tabs/documents/all'>
					<DocumentsList />
				</Route>
				<Route exact path='/tabs/account'>
					<Account />
				</Route>
				<Route path='/tabs/account/contact'>
					<Contact />
				</Route>
				<Route exact path='/tabs/'>
					<Redirect to='/Home' />
				</Route>
			</IonRouterOutlet>
			<IonTabBar slot='bottom' translucent={true}>
				<IonTabButton tab='Home' href='/tabs/Home'>
					<IonIcon aria-hidden='true' icon={home} size='large' />
					<IonLabel>Accueil</IonLabel>
				</IonTabButton>
				<IonTabButton tab='Doctors' href='/tabs/doctors_list'>
					<IonIcon aria-hidden='true' icon={calendarClearOutline} />
					<IonLabel>Docteurs</IonLabel>
				</IonTabButton>
				<IonTabButton tab='Documents' href='/tabs/documents'>
					<IonIcon aria-hidden='true' icon={folderOpenOutline} />
					<IonLabel>Mes documents</IonLabel>
				</IonTabButton>
				<IonTabButton tab='Account' href='/tabs/account'>
					<IonIcon aria-hidden='true' icon={personOutline} />
					<IonLabel>Mon profil</IonLabel>
				</IonTabButton>
			</IonTabBar>
		</IonTabs>
	);
};

export default MainsTabs;
