import { AuthProvider } from './hook/AuthContext';
import Home from './components/Home';

const App = () => {
    return (
        <AuthProvider>
            <Home />
        </AuthProvider>
    );
};

export default App;
