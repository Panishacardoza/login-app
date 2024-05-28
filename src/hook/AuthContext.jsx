import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (username, email, password) => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && storedUser.email === email && storedUser.password === password) {
            setUser({ username: storedUser.username, email });
            localStorage.setItem('currentUser', JSON.stringify({ username: storedUser.username, email }));
            setError(null);
        } else {
            setError('Invalid email or password');
        }
    };

    const signup = (username, email, password) => {
        if (email && password && username) {
            const newUser = { username, email, password };
            localStorage.setItem('user', JSON.stringify(newUser));
            setUser(newUser);
            localStorage.setItem('currentUser', JSON.stringify(newUser));
            setError(null);
        } else {
            setError('All fields are required');
        }
    };

    const logout = () => {
        localStorage.removeItem('currentUser');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout, error }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);