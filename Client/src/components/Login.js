import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import './Login.css';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')


    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (

        <div className='container-form'>
            <Form className='login-form' onSubmit={handleSubmit}>
                <h2>Login</h2>
                <FormGroup>
                    <Label>Email</Label>
                    <Input
                        type='email'
                        placeholder='email'
                        onChange={e => setEmail(e.target.value)} required>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label>Password</Label>
                    <Input
                        type='password'
                        placeholder='password'
                        onChange={e => setPassword(e.target.value)} required>
                    </Input>
                </FormGroup>

                <Button
                    size='lg'
                    color='danger'
                    block
                    disable={!validateForm()}
                    type='submit'
                >LOG IN
                </Button>
                <p className='footer-form'>You don't have an account? | Register <a href='#'>here!</a></p>
            </Form>
        </div>

    )
}

export default Login;
