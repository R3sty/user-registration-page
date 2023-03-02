import { useState } from 'react';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';

export interface LoginPageProps {}

const Login: React.FC<LoginPageProps> = (props) => {
	const auth = getAuth();
	const navigate = useNavigate();
	const [authing, setAuthing] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const signInWithEmail = async () => {
		setAuthing(true);

		signInWithEmailAndPassword(auth, email, password)
			.then((response) => {
				console.log(response.user.uid);
				navigate('/user-registration-page/');
			})
			.catch((error) => {
				console.log(error);
				setAuthing(false);
			});
	};

	const goToSignUpPage = () => {
		navigate('/signup');
	};

	return (
		<div className={styles.container}>
			<h1></h1>
			<form className={styles.form}>
				<input
					className={styles.input}
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					className={styles.input}
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button
					className={styles.button}
					onClick={signInWithEmail}
					disabled={authing}
				>
					Sign in
				</button>
			</form>
			<div>
				<p>Not registered?</p>
				<button
					className={styles.button}
					onClick={goToSignUpPage}
					disabled={authing}
				>
					Sign up
				</button>
			</div>
		</div>
	);
};

export default Login;
