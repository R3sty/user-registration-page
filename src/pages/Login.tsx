import { useContext, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebaseConfig";
import Form from "../components/Form";

type Props = {}

const LoginPage: React.FC = (props: Props) => {

    const user = useContext(AuthContext);
    
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const createAccount = async () => {
        try
        {
            await auth.createUserWithEmailAndPassword(
                emailRef.current!.value,
                passwordRef.current!.value
            )
        } catch (error)
        {
            console.error(error)
        }
    };


    const signIn = async (formData: { email: string, password: string}) => {
        try
        {
            await auth.signInWithEmailAndPassword(
                emailRef.current!.value,
                passwordRef.current!.value
            )
        } catch (error)
        {
            console.error(error)
        }
    };

    const signOut = async () => {
        await auth.signOut()
    }
    
    return (
        <div><Form onSubmit={signIn} /></div>
    )
};

export default LoginPage;
