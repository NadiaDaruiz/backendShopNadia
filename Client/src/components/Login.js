import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { BrowserRouter, Link } from 'react-router-dom';
import './Login.css';



const Login = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null)


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

            // const redirect = {
            //     method: 'GET',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'x-auth': data.token,
            //         'mode': 'no-cors'
            //     },
            // }
            // const res2 = await fetch('http://localhost:4001/products', redirect)
            // const data2 = await res2.json()
            // console.log(data2);

        }
    }

    return (

        <div className='container-form'>
            <BrowserRouter>
                <Form className='login-form' onSubmit={preventRefresh}>
                    <h2>Log-in</h2>
                    <FormGroup>
                        <Label style={{ 'font-weight': '600' }}>Email</Label>
                        <Input
                            type='email'
                            placeholder='email'
                            onChange={e => setEmail(e.target.value)} required>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label style={{ 'font-weight': '600' }}>Password</Label>
                        <Input
                            type='password'
                            placeholder='password'
                            onChange={e => setPassword(e.target.value)} required>
                        </Input>
                    </FormGroup>

                    <Button
                        onClick={() => { handleSubmit() }}
                        size='lg'
                        color='danger'
                        block
                        type='submit'>
                        LOG IN
                </Button>
                    <p className='footer-form'>You don't have an account? | Register <Link
                        to='../users'>here!</Link></p>
                </Form>
            </BrowserRouter>
        </div>

    )
}



export default Login;
