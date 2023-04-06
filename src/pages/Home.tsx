import { IonContent, IonIcon, IonPage} from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination } from 'swiper';
import { timeOutline } from 'ionicons/icons';
import css from './Home.module.css';
import AddConstancy from '../components/AddConstancy';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
	const pathos = ['Diabète', 'Patho2', 'Patho3', 'Patho4', 'Patho5', 'Patho6', 'Patho7', 'Patho8', 'Patho9', 'Patho10'];
	let pathoSelected = true;
	return (
		<IonPage>
			<IonContent fullscreen>
				<div className={'main_container'}>
					<div className={css.logoDiv}>
						<img src={require('../images/logo.png')} alt='logo' />
					</div>

					<div className={css.constancy}>
						<Swiper
							pagination={true}
							grabCursor={true}
							modules={[Pagination]}
							className={css.slider}
						>
							<SwiperSlide className={css.slider}>
								<Link to={`/tabs/home/constanciesList`} className={css.link}>
									<div className={css.image_constancy}></div>
									<div className={css.text}>
										<p>Mes mesures</p>
										<div className={css.right}>
											<IonIcon aria-hidden='true' icon={timeOutline} />
											<span>&nbsp;8 heures</span>
										</div>
									</div>
								</Link>
							</SwiperSlide>
							<SwiperSlide className={css.slider}>
								<Link to={`/tabs/home/rdvManagement`} className={css.link}>
									<div className={css.image_rdv}></div>
									<div className={css.text}>
										<p>Gérer mes rdv</p>
									</div>
								</Link>
							</SwiperSlide>
						</Swiper>
					</div>
					<div className={css.patho_list}>
						{pathos.map((patho, key) => {
							patho === 'Patho2' && (pathoSelected = false);
							return (
								<div key={key} className={pathoSelected ? css.patho_selected : css.patho}>
									<div className={css.text} style={{ color: pathoSelected ? '#000000' : '#F4F4F4' }}>
										{patho}
									</div>
								</div>
							);
						})}
					</div>
					<div className={css.add_constancy}>
						{<AddConstancy imageClassName={css.image} remainingTime={8} progress={100} />}
					</div>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Home;
