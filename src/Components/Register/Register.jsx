import React, { useState } from 'react';

const Register = () => {
    // declare 2 states for store data
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(null);
    // here is function when change in the email input field then the value will get here =onChange
    const handleEmailChange = (event) => {
        // console.log(event.target.value);
    }
    // here is the function when after type the password your mouse will go out from the password input field then it will get the password value
    const handlePasswordBlur = (event) =>{
        // console.log(event.target.value);
    }
    // this function for when click the register button then it will get the user input value
    const handleSubmit = (event) =>{
        event.preventDefault();
        // console.log(event.target.email.value);
        // console.log(event.target.password.value);
        const getEmail= event.target.email.value;
        const getPassword = event.target.password.value;
        setEmail(getEmail);
        setPassword(getPassword);
        console.log(email)
        console.log(password);
    }

    return (
        <div className='w-1/2 mx-auto'>
            <h1 className='text-3xl font-bold my-5'>register</h1>
            <form onSubmit={handleSubmit}>

                <input onChange={handleEmailChange} className='border-2 mb-2' id='email' type="email" placeholder='Email' /><br />
                <input onBlur={handlePasswordBlur} className='border-2 mb-2' type="password" id='password' placeholder='Password' /> <br />
                <button className='border-2 mb-2' type='submit'>Register</button>
            </form>
        </div>
    );
};

export default Register; <h1>register</h1>