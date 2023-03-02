import { useState } from 'react';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = (props) => {
	const auth = getAuth();
	const navigate = useNavigate();
	const [authing, setAuthing] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const goToHomepage = () => {
		navigate('/user-registration-page/');
	};

	const signUpWithEmail = () => {
		setAuthing(true);

		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log('user created:', user);
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
			});

		goToHomepage();

		signInWithEmailAndPassword(auth, email, password)
			.then((response) => {
				console.log(response.user.uid);
			})
			.catch((error) => {
				console.log(error);
				setAuthing(false);
			});
	};

	return (
		<div>
			<form>
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button onClick={signUpWithEmail}>Sign up</button>
			</form>
		</div>
	);
};

export default SignUp;
