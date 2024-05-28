import { useAuth } from '../hook/AuthContext';
import AuthCard from "./AuthCard"
import "../App.css"

const Home = () => {
    const { user, logout } = useAuth();

  return (
    <div className='home'>
        <h1>Welcome to the Home Page</h1>
            {user ? (
                <div>
                    <h2>User Details</h2>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <AuthCard />
            )}
    </div>
  );
};

export default Home