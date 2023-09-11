import React,{useState} from 'react'
import Input from './Input'
import Button from './Button'
import './Login.css'
import { createUserDocFromAuth, signinAuthUserWithEmailAndPassword } from './utils/firebase'

const Login = (props)=>{
    const [contact, setContact] = useState({
        email: '',
        password: ''
    })
       
    const {email, password} = contact

    
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

        try{
            const response = await signinAuthUserWithEmailAndPassword(email, password);
            console.log(response)
            window.location.href = '/';
        } catch(error){
            console.log("Error logging in ", error.message)
        }
    }
 
    return <div className= 'header-div'>
        <a>Sign Up</a>
        <p>Your email</p>
        <Input 
        name= 'email'
        type= 'text'
        placeholder ='email'
        onChange = {handleChange}
        value = {contact.email}
        />

        <br></br>
        <p>Your password</p>
        <Input 
        name='password'
        type= 'password'
        placeholder ='password'
        onChange = {handleChange}
        value = {contact.password}
        />

        <br></br>

        <button onClick={handleSubmit}>
            Login
        </button>


    </div>

}
export default Login