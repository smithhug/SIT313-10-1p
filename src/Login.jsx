import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import './Login.css';
import { createUserDocFromAuth, signinAuthUserWithEmailAndPassword } from './utils/firebase';

const Login = (props) => {
  const [contact, setContact] = useState({
    email: '',
    password: '',
  });

  const { email, password } = contact;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signinAuthUserWithEmailAndPassword(email, password);
      console.log(response);
      window.location.href = '/';
    } catch (error) {
      alert('Incorrect Email or password')
      console.log('Error logging in ', error.message);
    }
  };

  return (
    <div className='login-style'>
      <div className='login-container'>
        <a className='signuplink' href='/signup'>Sign Up</a>
        <p className='label'>Your email</p>
        <Input 
          className='leftinput'
          name='email'
          type='text'
          placeholder='email'
          onChange={handleChange}
          value={contact.email}
        />

        <p className='label'>Your password</p>
        <Input 
          className='leftinput'
          name='password'
          type='password'
          placeholder='password'
          onChange={handleChange}
          value={contact.password}
        />

        <button onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
};

export default Login;
