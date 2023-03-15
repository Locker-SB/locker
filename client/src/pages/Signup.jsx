import outfit from '../images/signup-outfit.webp';
import axios from 'axios';
import { useState } from 'react';

const AuthenticationErrors = {
    Username: 'temp',
    Email: 'Duplicate value entered for email field, please choose another value',
    Password: 'is shorter than the minimum allowed length (6).',
};

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
        setLoginError('');
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
        setLoginError('');
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
        setLoginError('');
    };

    const handlePlacehholder = (err) => {
        return loginError === AuthenticationErrors[err]
            ? 'bg-slate-50 p-2 px-6 border-b-2 focus:outline-none placeholder:text-red-500'
            : 'bg-slate-50 p-2 px-6 border-b-2 focus:outline-none';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                'http://localhost:5000/api/v1/auth/register',
                {
                    name: username,
                    email,
                    password,
                }
            );
        } catch (err) {
            let errorMessage = err.response.data.msg;
            if (errorMessage.split(' ').at(-1) === '(6).') {
                errorMessage = errorMessage.split(' ').slice(3).join(' ');
                setLoginError(errorMessage);
            } else {
                setLoginError(errorMessage);
            }

            if (errorMessage === AuthenticationErrors['Username']) {
                setUsername('');
            }
            if (errorMessage === AuthenticationErrors['Email']) {
                setEmail('');
            }
            if (errorMessage === AuthenticationErrors['Password']) {
                setPassword('');
            }
        }
    };

    return (
        // Main Container
        <div className="bg-sky-100 relative flex justify-center items-center min-h-screen">
            <div className="bg-sky-100 flex space-x-2">
                <img
                    className="w-[430px] hidden md:block rounded-l-lg shadow-lg"
                    src={outfit}
                    alt="outift"
                />
                <form
                    className="bg-slate-50 flex flex-col space-y-8 border p-12 md:p-20 justify-center items-center rounded-lg md:rounded-r-lg md:rounded-l-none shadow-lg"
                    onSubmit={handleSubmit}
                >
                    <h1 className="font-bold text-3xl">Locker</h1>
                    <input
                        className={handlePlacehholder('Username')}
                        placeholder={
                            loginError === 'Username'
                                ? 'Invalid username'
                                : 'Username'
                        }
                        id="username"
                        value={username}
                        onChange={handleChangeUsername}
                    ></input>
                    <input
                        className={handlePlacehholder('Email')}
                        type="email"
                        placeholder={
                            loginError === AuthenticationErrors['Email']
                                ? 'Email already in use'
                                : 'Email'
                        }
                        id="email"
                        value={email}
                        onChange={handleChangeEmail}
                    ></input>
                    <input
                        className={handlePlacehholder('Password')}
                        type="password"
                        placeholder={
                            loginError === AuthenticationErrors['Password']
                                ? 'Must be at least 6 chars'
                                : 'Password'
                        }
                        id="password"
                        value={password}
                        onChange={handleChangePassword}
                    ></input>
                    <button className="text-white bg-sky-700 p-6 px-10 rounded-lg hover:-translate-y-1 hover:bg-sky-800 hover:text-white transition">
                        Sign up
                    </button>
                    <div className="flex space-x-1">
                        <h1>Already have an account?</h1>
                        <a className="text-sky-700" href="login">
                            Log in
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
