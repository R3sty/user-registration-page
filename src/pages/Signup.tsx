import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export interface SignUpProps { };

const SignUp: React.FC<SignUpProps> = (props) => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [authing, setAuthing] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUpWithEmail = async () => {
        setAuthing(true);

        createUserWithEmailAndPassword(auth, email, password)
            .then((response) => {
                console.log(response.user.uid);
                navigate('/')
            })
            .catch((error) => {
                console.log(error);
                setAuthing(false);
            });
    }

        
    return (
        <div>
            <form>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={signUpWithEmail}>Sign up</button>
            </form>
        </div>
    )
};

export default SignUp;