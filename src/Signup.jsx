import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import './Signup.css';
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from './utils/firebase';

const Signup = (props) => {
  const [contact, setContact] = useState({
    displayName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, lastName, email, password, confirmPassword } = contact;

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

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocFromAuth(user, { displayName, lastName });
      window.location.href = '/login';
    } catch (error) {
      console.log('Error in creating a new user ', error.message);
    }
  };

  return (
    <div className="signup-style">
      <div className="signup-container">
        <p className="signup-link">Create a DevLink Account</p>
        
        <p className='label'>First Name*</p>
        <input
          className="signup-input"
          name="displayName"
          type="text"
          placeholder="name"
          onChange={handleChange}
          value={contact.displayName}
        />

        <p className='label'>Last Name*</p>
        <input
          className="signup-input"
          name="lastName"
          type="text"
          placeholder="name"
          onChange={handleChange}
          value={contact.lastName}
        />

        <p className='label'>Email*</p>
        <input
          className="signup-input"
          name="email"
          type="text"
          placeholder="email"
          onChange={handleChange}
          value={contact.email}
        />

        <p className='label'>Password*</p>
        <input
          className="signup-input"
          name="password"
          type="password"
          placeholder="password"
          onChange={handleChange}
          value={contact.password}
        />

        <p className='label'>Confirm password*</p>
        <input
          className="signup-input"
          name="confirmPassword"
          type="password"
          placeholder="password"
          onChange={handleChange}
          value={contact.confirmPassword}
        />

        <button className="formbutton" onClick={handleSubmit}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
