import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import{createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, updateProfile } from 'firebase/auth'
import app from '../../Firebase/firebase.config';
import { Link } from 'react-router-dom';


const RegisterRbs = () => {
    const [errorMessage,setErrorMessage] = useState('');
    const [successMessage,setSuccessMessage] = useState('');
    const emailRef = useRef();
    const handleRegisterRbs = event =>{
        
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        // errorMessage='';
        console.log(name,email,password);
        setSuccessMessage('');
        setErrorMessage('');
        if(!/(?=.*[a-z])/.test(password))
        {
           setErrorMessage('Add at least one lowercase latter!')
           return
        }
        else if(!/(?=.*[A-Z])/.test(password))
        {
           setErrorMessage('Add at least one uppercase latter!')
           return
        }
        else if(!/(?=.*\d)/.test(password))
        {
           setErrorMessage('Add at least one digit!')
           return
        }
        else if(!/.{8,}/.test(password))
        {
           setErrorMessage('Password length at least 8!')
           return
        }
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth,email,password)
        .then(result =>{
            const loggedUser = result.user;
            event.target.reset();
            
            emailVarification(loggedUser);
            updateProfileInfo(loggedUser,name)
            // errorMessage=null;
            console.log(event);
            console.log(loggedUser)
            setSuccessMessage('User added successfully.')
        })
        .catch(error =>{
            console.error(error);
            setErrorMessage(error.message);
           
        })
        
    }
    const emailVarification = user => {
        sendEmailVerification(user)
        .then(result => {
            // console.log(result);
            alert('Please verify your email.')
        })
    }
    const handleResetPassword = event =>{
        console.log(emailRef.current.value)
        const email = emailRef.current.value;
        const auth = getAuth(app);
        sendPasswordResetEmail(auth, email)
        .then(()=>{
            console.log('Send email for reset password')
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    const updateProfileInfo = (user, name) =>{
        const auth = getAuth(app)
        updateProfile(user, {
            displayName: name
        })
        .then(()=>{
            console.log('Update profile name')
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    return (
        <div className='w-1/2 mx-auto mt-5'>
            <Form onSubmit={handleRegisterRbs}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" required  name="name" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" required ref={emailRef}  name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" required name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" required label="Accept Terms and conditions" />
                </Form.Group>
                <Button  className='border-3 text-black' type="submit">
                    Submit
                </Button> 
                
                <p>Continue with <Link  className='text-primary' to='/login'>LogIn</Link></p>
                {
                    <div>
                        <p className='text-danger'>{errorMessage}</p>
                    <p className='text-success'>{successMessage}</p>
                    </div>
                }
            </Form>
            <p>Forget password? Please <button onClick={handleResetPassword} className='btn btn-link'>Reset Password</button></p>
        </div>
    );
};

export default RegisterRbs;