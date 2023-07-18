import React, { useRef, useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailfield = useRef<HTMLInputElement>(null);
    const passwordfield = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Tu môžeš vykonať POST požiadavku s použitím zadaných údajov
        const data = {
            email: email,
            password: password
        };

        // Napríklad pomocou fetch funkcie
        fetch('http://localhost:8080/api/v1/auth/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData); // Tu môžeš spracovať odpoveď zo servera
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

    return (
        <div className='home'>
            <h1>Registration</h1>
            <form onSubmit={handleSubmit}>
                <input
                    ref={emailfield}
                    type='text'
                    name='email'
                    onChange={handleInput}
                    className='email'
                />
                <input
                    ref={passwordfield}
                    type='text'
                    name='password'
                    onChange={handleInput}
                    className='password'
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default Login;
