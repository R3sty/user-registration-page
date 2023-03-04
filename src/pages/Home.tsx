import { getAuth, signOut } from 'firebase/auth';
import styles from './home.module.scss';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = (props) => {
	const auth = getAuth();

	const goToEditProfile = () => {
		return;
	};

	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Homescreen works</h1>
			<button onClick={() => signOut(auth)}>Sign out</button>
			<button onClick={goToEditProfile}>Edit Profile</button>
		</div>
	);
};

export default HomeScreen;
