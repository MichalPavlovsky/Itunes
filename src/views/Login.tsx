import React, { useRef, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

interface LoginProps {
    isLogin: (value: boolean) => void;
    valLog: boolean;
}

const Login: React.FC<LoginProps> = ({ isLogin, valLog }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    const emailField = useRef<HTMLInputElement>(null);
    const passwordField = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
            email: email,
            password: password,
        };

        fetch('http://localhost:8080/api/v1/auth/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Login failed');
                }
            })
            .then((responseData) => {
                setToken(responseData.token);
                isLogin(true);
                console.log(responseData.token); // Sto; // Update the isLoggedIn state in the parent component // Redirect to the UserPage
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        switch (name) {
            case 'email':
                setEmail(String(value));
                break;
            case 'password':
                setPassword(String(value));
                break;
            default:
                break;
        }
    };
    console.log(valLog)

    useEffect(() => {
        console.log('ef ' + valLog);
        console.log('tu somoo');
        if (valLog) {
            isLogin(true); // Synchronizace stavu po zavedení komponenty, pokud je uživatel přihlášen
        }
    }, [valLog]); // Přidali jsme valLog jako závislost

    if (valLog) {
        return <Redirect to="/user" />;
    }

    return (
        <div className="home">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    ref={emailField}
                    type="text"
                    name="email"
                    onChange={handleInput}
                    className="email"
                />
                <input
                    ref={passwordField}
                    type="password"
                    name="password"
                    onChange={handleInput}
                    className="password"
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
