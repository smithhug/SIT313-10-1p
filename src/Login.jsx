import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { createUserDocFromAuth, signinAuthUserWithEmailAndPassword } from './utils/firebase';
import { useAuth } from './utils/authstate';

const Login = () => {
  const { login } = useAuth();

  const nav = useNavigate();

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
      await login(email, password);
      console.log(response);
      nav('/');
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
        <input 
          className='leftinput'
          name='email'
          type='text'
          placeholder='email'
          onChange={handleChange}
          value={contact.email}
        />

        <p className='label'>Your password</p>
        <input 
          className='leftinput'
          name='password'
          type='password'
          placeholder='password'
          onChange={handleChange}
          value={contact.password}
        />

        <button className='formbutton' onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
};

export default Login;
