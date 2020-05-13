import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';

import './SignUp.css';


const SignUp = () => {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [street, setStreet] = useState(null);
    const [houseNr, setHouseNr] = useState(null);
    const [zipCode, setZipCode] = useState(null);
    const [city, setCity] = useState(null);
    const [country, setCountry] = useState(null);
    const [userName, setUserName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const [status, setStatus] = useState(false)


    function preventRefresh(e) {
        e.preventDefault();
        // reset(empty input fields is not working)
        e.target.reset()
    }

    const handleSubmit = async () => {
        if (
            firstName === null ||
            lastName === null ||
            street === null ||
            houseNr === null ||
            zipCode === null ||
            city === null ||
            country === null ||
            userName === null ||
            email === null ||
            password === null
        ) {
            alert('Please fill all the fields')
        } else {
            const userData = {
                firstName: firstName,
                lastName: lastName,
                street: street,
                houseNr: houseNr,
                zipCode: zipCode,
                city: city,
                country: country,
                userName: userName,
                email: email,
                password: password
            };
            const sign = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            };
            const resp = await fetch('/users', sign)
            const data = await resp.json();
            console.log('resp:', data);
            if (data.success) {
                setStatus(true)
            }
        }
    }

    return (
        <div className='base-container'>
            <Form onSubmit={preventRefresh} className='sign-form'>
                <h2>Register</h2>
                <p>Please complete this form and submit.</p>
                <div className='inline-container'>
                    <FormGroup>
                        <Label style={{ fontWeight: '600' }}>First Name</Label>
                        <Input
                            value={firstName}
                            type='text'
                            placeholder='first name'
                            onChange={e => setFirstName(e.target.value)} required>
                        </Input>
                    </FormGroup>
                    <FormGroup >
                        <Label style={{ fontWeight: '600' }}>Last Name</Label>
                        <Input
                            value={lastName}
                            type='text'
                            placeholder='last name'
                            onChange={e => setLastName(e.target.value)} required>
                        </Input>
                    </FormGroup>
                </div>
                <div className='inline-container'>
                    <FormGroup >
                        <Label style={{ fontWeight: '600' }}>Street</Label>
                        <Input
                            value={street}
                            type='text'
                            placeholder='Street'
                            onChange={e => setStreet(e.target.value)} required>
                        </Input>
                    </FormGroup>
                    <FormGroup >
                        <Label style={{ fontWeight: '600' }}>House Number</Label>
                        <Input
                            value={houseNr}
                            type='number'
                            placeholder='House Number'
                            onChange={e => setHouseNr(e.target.value)} required>
                        </Input>
                    </FormGroup>
                </div>
                <div className='inline-container'>
                    <FormGroup >
                        <Label style={{ fontWeight: '600' }}>Zip Code</Label>
                        <Input
                            value={zipCode}
                            type='number'
                            placeholder='Zip Code'
                            onChange={e => setZipCode(e.target.value)} required>
                        </Input>
                    </FormGroup>
                    <FormGroup >
                        <Label style={{ fontWeight: '600' }}>City</Label>
                        <Input
                            value={city}
                            type='text'
                            placeholder='City'
                            onChange={e => setCity(e.target.value)} required>
                        </Input>
                    </FormGroup>
                </div>
                <FormGroup >
                    <Label style={{ fontWeight: '600' }}>Country</Label>
                    <Input
                        value={country}
                        type='text'
                        placeholder='Country'
                        onChange={e => setCountry(e.target.value)} required>
                    </Input>
                </FormGroup>
                <FormGroup >
                    <Label style={{ fontWeight: '600' }}>User Name</Label>
                    <Input
                        value={userName}
                        type='name'
                        placeholder='User Name'
                        onChange={e => setUserName(e.target.value)} required>
                    </Input>
                </FormGroup>
                <FormGroup >
                    <Label style={{ fontWeight: '600' }}>Email</Label>
                    <Input
                        value={email}
                        type='email'
                        placeholder='email'
                        onChange={e => setEmail(e.target.value)} required>
                    </Input>
                </FormGroup>
                <FormGroup >
                    <Label style={{ fontWeight: '600' }}>Password</Label>
                    <Input
                        value={password}
                        type='Password'
                        placeholder='Password'
                        onChange={e => setPassword(e.target.value)} required>
                    </Input>
                </FormGroup>
                <Button
                    onClick={() => { handleSubmit() }}
                    variant='danger'
                    size='lg'
                    block>
                    SUBMIT
                </Button>
                <p className='footer-form'>You already have an account? | Log in <Link to='/login'>here!</Link></p>
            </Form>
            {status ? <Redirect to='/products' /> : <Link to='/' />}
        </div>
    )
}
export default SignUp;