import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './SignUp.css';


const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [street, setStreet] = useState('');
    const [houseNr, setHouseNr] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className='container-form '>
            <Form onSubmit={handleSubmit} className='sign-form'>
                <h2>Register</h2>
                <p>Please complete this form and submit.</p>
                <div className='inline-container'>
                    <FormGroup>
                        <Label>First Name</Label>
                        <Input className='input'
                            type='text'
                            placeholder='first name'
                            onChange={e => setFirstName(e.target.value)} required>
                        </Input>
                    </FormGroup>
                    <FormGroup >
                        <Label>Last Name</Label>
                        <Input
                            type='text'
                            placeholder='last name'
                            onChange={e => setLastName(e.target.value)} required>
                        </Input>
                    </FormGroup>
                </div>
                <div className='inline-container'>
                    <FormGroup >
                        <Label>Street</Label>
                        <Input
                            type='text'
                            placeholder='Street'
                            onChange={e => setStreet(e.target.value)} required>
                        </Input>
                    </FormGroup>
                    <FormGroup >
                        <Label>House Number</Label>
                        <Input
                            type='number'
                            placeholder='House Number'
                            onChange={e => setHouseNr(e.target.value)} required>
                        </Input>
                    </FormGroup>
                </div>
                <div className='inline-container'>
                    <FormGroup >
                        <Label>Zip Code</Label>
                        <Input
                            type='number'
                            placeholder='Zip Code'
                            onChange={e => setZipCode(e.target.value)} required>
                        </Input>
                    </FormGroup>
                    <FormGroup >
                        <Label>City</Label>
                        <Input
                            type='text'
                            placeholder='City'
                            onChange={e => setCity(e.target.value)} required>
                        </Input>
                    </FormGroup>
                </div>
                <FormGroup >
                    <Label>Country</Label>
                    <Input
                        type='text'
                        placeholder='Country'
                        onChange={e => setCountry(e.target.value)} required>
                    </Input>
                </FormGroup>
                <FormGroup >
                    <Label>User Name</Label>
                    <Input
                        type='name'
                        placeholder='User Name'
                        onChange={e => setUserName(e.target.value)} required>
                    </Input>
                </FormGroup>
                <FormGroup >
                    <Label>Email</Label>
                    <Input
                        type='email'
                        placeholder='email'
                        onChange={e => setEmail(e.target.value)} required>
                    </Input>
                </FormGroup>
                <FormGroup >
                    <Label>Password</Label>
                    <Input
                        type='Password'
                        placeholder='Password'
                        onChange={e => setPassword(e.target.value)} required>
                    </Input>
                </FormGroup>
                <Button color='danger' size='lg' block>
                    SUBMIT
                </Button>
                <p className='footer-form'>You already have an account? | Log in <a href='#'>here!</a></p>
            </Form>
        </div>
    )
}
export default SignUp;