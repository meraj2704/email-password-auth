import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../Firebase/firebase.config';
const auth = getAuth(app);

const Login = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        console.log(event);
        setErrorMessage('');
        setSuccessMessage('');
        if (!/(?=.*[a-z])/.test(password)) {
            setErrorMessage('Add at least one lowercase latter!')
            return
        }
        else if (!/(?=.*[A-Z])/.test(password)) {
            setErrorMessage('Add at least one uppercase latter!')
            return
        }
        else if (!/(?=.*\d)/.test(password)) {
            setErrorMessage('Add at least one digit!')
            return
        }
        else if (!/.{8,}/.test(password)) {
            setErrorMessage('Password length at least 8!')
            return
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                setSuccessMessage('Logged in successfully');
                
                // alert(successMessage);
            })
            .catch(error => {
                console.error(error);
                setErrorMessage(error.message);
                // alert(errorMessage);
            })
    }
    return (
        <div>
            <h1>Login</h1>
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-md w-1/4">
                    <h2 className="text-2xl font-semibold mb-4">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="Password"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Login
                            </button>
                        </div>
                        <p><Link to='/register-rbs'>Sign Up</Link></p>
                    </form>
                    {
                        <div>
                            <p className='text-danger'>{errorMessage}</p>
                            <p className='text-success'>{successMessage}</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;