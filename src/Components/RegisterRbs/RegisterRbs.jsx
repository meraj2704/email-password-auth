import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import{createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import app from '../../Firebase/firebase.config';
import { Result } from 'postcss';

const RegisterRbs = () => {
    const handleRegisterRbs = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password);
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth,email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error =>{
            console.error(error);
        })
        
    }
    return (
        <div className='w-1/2 mx-auto mt-5'>
            <Form onSubmit={handleRegisterRbs}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept Terms and conditions" />
                </Form.Group>
                <Button  className='border-3 text-black' type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default RegisterRbs;