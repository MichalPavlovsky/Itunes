import React, { useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';

interface LoginProps {
    isLogin: (value: boolean) => void;
    valLog: boolean;
    setToken: (token: string) => void;
    setFirstName: (name: string) => void;
    setLastName: (name: string) => void;
}

const Login: React.FC<LoginProps> = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
                props.setToken(responseData.token);
                console.log(responseData.firstName) // Nastavení tokenu v rodičovské komponentě
                console.log(responseData.lastName) // Nastavení tokenu v rodičovské komponentě
                props.isLogin(true);
                props.setFirstName(responseData.firstName) // Nastavení stavu přihlášení v rodičovské komponentě
                props.setLastName(responseData.lastName) // Nastavení stavu přihlášení v rodičovské komponentě
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

    if (props.valLog) {
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
