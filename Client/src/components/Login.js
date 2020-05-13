import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import './Login.css';



const Login = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null)
    const [status, setStatus] = useState(false)


    const preventRefresh = (e) => {
        e.preventDefault();
    }

    const handleSubmit = async () => {
        if (email === null || password === null) {
            alert('Please fill the fields')
        } else {
            const userData = {
                email: email,
                password: password
            };
            const log = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            };
            const resp = await fetch('http://localhost:4001/users/login', log)
            const data = await resp.json()
            console.log(data);
            if (data.success) {
                setStatus(true)
            }

        }
    }

    return (

        <div className='base-container'>
            {/* the false part is not working. I wanna get redirected to users route/sign up */}
            {status ? <Redirect to='/products' /> : <Link to='/' />}
            <Form className='login-form' onSubmit={preventRefresh}>
                <h2>Log-in</h2>
                <FormGroup>
                    <Label style={{ fontWeight: '600' }}>Email</Label>
                    <Input
                        type='email'
                        placeholder='email'
                        onChange={e => setEmail(e.target.value)} required>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label style={{ fontWeight: '600' }}>Password</Label>
                    <Input
                        type='password'
                        placeholder='password'
                        onChange={e => setPassword(e.target.value)} required>
                    </Input>
                </FormGroup>

                <Button
                    onClick={() => { handleSubmit() }}
                    size='lg'
                    variant='danger'
                    block
                    type='submit'>
                    LOG IN
                </Button>
                <p className='footer-form'>You don't have an account? | Register <Link
                    to='/users'>here!</Link></p>
            </Form>
        </div>
    )
}

export default Login;
