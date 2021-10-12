import React, { useState } from 'react';
import {Button,Form,Toast} from 'react-bootstrap';
import { useHistory } from 'react-router';
import { createUser } from './functions/register';
const Register = () => {
    const [email,setEmail] = useState('');
    const[name,setName] = useState('');
    const[password,setPassword] = useState('');
    const history = useHistory()

    const handleSubmit =  (e) => {
       e.preventDefault()
        const userData = {
            name,
            email,
            password
        }
        createUser(userData).then(res=>{
            console.log(res)
            window.alert('registration Successfull')
        
        })
        .catch(err =>{
            console.log(err)
            if(err){
                window.alert('Password and name length should be higher than 5 ')
            
            }
           
        })
        history.push('/login')
    }
    const handleChangeEmail = (e) =>{
        setEmail(e.target.value)
        console.log(e.target.value)
    }
    const handleName= (e) =>{
        setName(e.target.value)
        console.log(e.target.value)
    }
    const handlePassword = (e) =>{
       
        setPassword(e.target.value)
        console.log(e.target.value)
    }
    return (
        <div className="container">
            <div className="row">
              <div className="col-md-6 mx-auto mt-5">
              <Form onSubmit={handleSubmit}>
                   <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={name} onChange={handleName} placeholder="Enter name" />
                      
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={email}  onChange={handleChangeEmail} placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} onChange={handlePassword} placeholder="Password" />
                    </Form.Group>
                   
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
              </Form>
              </div>
            </div>
        </div>
    );
};

export default Register;