import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export interface LoginPageProps { };

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

    const goToSignUpPage = () => { navigate("/signup") };

    const signUpWithEmail = async () => {
        setAuthing(true);

        createUserWithEmailAndPassword(auth, email, password)
            .then((response) => {
                console.log(response.user.uid);
                navigate('/user-registration-page/')
            })
            .catch((error) => {
                console.log(error);
                setAuthing(false)
            });
    };

    return (
        <div>
            <form>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={signInWithEmail} disabled={authing}>Sign in</button>
            </form>
            <div>
                <p>Not registered?</p>
                <button onClick={goToSignUpPage} disabled={authing}>Sign up</button>
            </div>
        </div>
    );
};

export default Login;