import React,{useState} from 'react'
import Input from './Input'
import Button from './Button'
import './Login.css'
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from './utils/firebase'


const Signup = (props)=>{
        const [contact, setContact] = useState({
            displayName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
       
    const {displayName, lastName, email, password, confirmPassword} = contact;

    
    const handleChange = (event)=>{
        const {name, value} = event.target
        setContact ((preValue)=>{  
        return {
        ...preValue,
        [name]: value
        }
        })
    }

    const handleSubmit = async(event) =>{
        event.preventDefault();

        if (password !== confirmPassword){
            alert('Passwords do not match!')
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocFromAuth (user, {displayName, lastName});
            window.location.href = '/login';
        } catch(error){
            console.log("Error in creating new user ", error.message)
        }
    }

 
    return <div className= 'header-div'>
        <a>Create a DevLink Account</a>

        <p>First Name*</p>
        <Input 
        name= 'displayName'
        type= 'text'
        placeholder ='name'
        onChange = {handleChange}
        value = {contact.displayName}
        />
        <br></br>

        <p>Last Name*</p>
        <Input 
        name= 'lastName'
        type= 'text'
        placeholder ='name'
        onChange = {handleChange}
        value = {contact.lastName}
        />
        <br></br>

        <p>Email*</p>
        <Input 
        name= 'email'
        type= 'text'
        placeholder ='email'
        onChange = {handleChange}
        value = {contact.email}
        />

        <br></br>
        <p>Password*</p>
        <Input 
        name='password'
        type= 'password'
        placeholder ='password'
        onChange = {handleChange}
        value = {contact.password}
        />

        <br></br>

        <p>Confirm password*</p>
        <Input 
        name='confirmPassword'
        type= 'password'
        placeholder ='password'
        onChange = {handleChange}
        value = {contact.confirmPassword}
        />

        <br></br>

        <button onClick={handleSubmit}>
            Sign Up
        </button>


    </div>

}
export default Signup