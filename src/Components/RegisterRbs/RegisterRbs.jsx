import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import{createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import app from '../../Firebase/firebase.config';
import { Link } from 'react-router-dom';


const RegisterRbs = () => {
    const [errorMessage,setErrorMessage] = useState('');
    const [successMessage,setSuccessMessage] = useState('');
    const handleRegisterRbs = event =>{
        
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        // errorMessage='';
        console.log(email,password);
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
            console.log(loggedUser);
            // errorMessage=null;
            
            setSuccessMessage('User added successfully.')
        })
        .catch(error =>{
            console.error(error);
            setErrorMessage(error.message);
           
        })
        
    }
    return (
        <div className='w-1/2 mx-auto mt-5'>
            <Form onSubmit={handleRegisterRbs}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" required  name="email" placeholder="Enter email" />
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
                <p>Continue with <Link className='text-primary' to='/login'>LogIn</Link></p>
                {
                    <div>
                        <p className='text-danger'>{errorMessage}</p>
                    <p className='text-success'>{successMessage}</p>
                    </div>
                }
            </Form>
        </div>
    );
};

export default RegisterRbs;