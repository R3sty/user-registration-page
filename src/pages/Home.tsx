import { getAuth, signOut } from 'firebase/auth'
interface HomeScreenProps { }

const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  const auth = getAuth();

  return (
    <div>
      <p>Homescreen works</p>
      <button onClick={() => signOut(auth)}>Sign out</button>
    </div>
  );
};

export default HomeScreen;
