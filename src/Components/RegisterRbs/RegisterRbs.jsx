import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RegisterRbs = () => {
    const handleRegisterRbs = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password);
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