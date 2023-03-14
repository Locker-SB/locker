import outfit from '../images/signup-outfit.webp';
import { useState } from 'react';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = () => {
        setUsername('');
        setEmail('');
        setPassword('');
    };

    return (
        // Main Container
        <div className="bg-slate-50 relative flex justify-center items-center min-h-screen">
            <div className="flex space-x-2">
                <img
                    className="w-[430px] hidden md:block rounded-l-lg shadow-lg"
                    src={outfit}
                    alt="outift"
                />
                <form
                    className="flex flex-col space-y-8 border p-20 justify-center items-center rounded-lg md:rounded-r-lg md:rounded-l-none shadow-lg"
                    onSubmit={handleSubmit}
                >
                    <h1 className="font-bold text-3xl">Locker</h1>
                    <input
                        className="bg-slate-50 p-2 px-6 border-b-2 focus:outline-none"
                        type="text"
                        placeholder="username"
                        id="username"
                        value={username}
                        onChange={handleChangeUsername}
                    ></input>
                    <input
                        className="bg-slate-50 p-2 px-6 border-b-2 focus:outline-none"
                        type="email"
                        placeholder="email"
                        id="email"
                        value={email}
                        onChange={handleChangeEmail}
                    ></input>
                    <input
                        className="bg-slate-50 p-2 px-6 border-b-2 focus:outline-none"
                        type="password"
                        placeholder="password"
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
