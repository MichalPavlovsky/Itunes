import React, { useRef, useState } from 'react';

const Register = () => {
    const [names, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const namefield = useRef<HTMLInputElement>(null);
    const surnamefield = useRef<HTMLInputElement>(null);
    const emailfield = useRef<HTMLInputElement>(null);
    const passwordfield = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Tu môžeš vykonať POST požiadavku s použitím zadaných údajov
        const data = {
            firstname: names,
            lastname: surname,
            email: email,
            password: password,
        };

        // Napríklad pomocou fetch funkcie
        try {
            const response = await fetch('http://localhost:8080/api/v1/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const responseData = await response.json();
            console.log(responseData); // Tu môžeš spracovať odpoveď zo servera
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        switch (name) {
            case 'name':
                setName(String(value));
                break;
            case 'surname':
                setSurname(String(value));
                break;
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
                    ref={namefield}
                    type='text'
                    name='name'
                    onChange={handleInput}
                    className='name'
                />
                <input
                    ref={surnamefield}
                    type='text'
                    name='surname'
                    onChange={handleInput}
                    className='surname'
                />
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
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Register;
