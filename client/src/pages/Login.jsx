import outfit from '../images/login-outfit.jpg';
import { useState } from 'react';

const Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeUser = (e) => {
        setUsername(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = () => {
        setUser('');
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
                        placeholder="username or email"
                        id="username"
                        value={user}
                        onChange={handleChangeUser}
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
                        Login
                    </button>
                    <a className="pt-8 text-blue-900" href="#">
                        Forgot password?
                    </a>
                    <div className="flex space-x-1">
                        <h1>Don't have an account?</h1>
                        <a className="text-sky-700" href="signup">
                            Sign up
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
