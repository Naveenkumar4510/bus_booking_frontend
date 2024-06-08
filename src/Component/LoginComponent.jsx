import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import { loginadmin } from '../Services/LoginService';
import '../Styles/login.css';
const LoginComponent = () => {

const [username,setUsername]=useState('');
const [password,setPassword]=useState('');



// const handleSubmit=async(e)=>{
//   e.preventDefault();
//   try{
//     const response=await loginadmin(username,password);
//     console.log(response.data)
//   }catch(error){
// console.log('Login failed',error);
//   }
// }


const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await loginadmin(username, password);
    console.log(response.data);
    alert("Login success")
  } catch (error) {
    console.error('Login failed', error);
  }
};
  return (
//     <Form onSubmit={handleSubmit}>
// <Form.Group controlId='formBasicUsername'>
// <Form.Label>Username</Form.Label>
// <Form.Control 
// type="text"
// placeholder=' Enter username'
// value={username}
// onChange={(e)=>setUsername(e.target.value)}
// />
// </Form.Group>
//     </Form>
<div className='login-container bg-gray-200'>
<Form onSubmit={handleSubmit}m className='login-form'>
<h4>Login Form
</h4>
<Form.Group controlId="formBasicUsername" className='form-group'>
  <Form.Label>Username</Form.Label>
  <Form.Control
    type="text"
    placeholder=' Enter username'
    value={username}
    onChange={(e) => setUsername(e.target.value)} // Update username state variable
  />
</Form.Group>

<Form.Group controlId="formBasicPassword" className='form-group'>
  <Form.Label>Password</Form.Label>
  <Form.Control
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)} // Update password state variable
  />
</Form.Group>
    <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default LoginComponent