import React,{useState} from 'react';
import {Button,Form,Toast} from 'react-bootstrap';
import { useHistory } from 'react-router';
import { loginUser } from './functions/login';
const Login = () => {
    const [email,setEmail] = useState('');
   
    const[password,setPassword] = useState('');
    const history = useHistory()

    const handleLogIn = (e) =>{
        e.preventDefault()
        const userData = {
            email,
            password
        }
        loginUser(userData)
        .then(res =>{
            res.json()
          
        })
        .catch(err =>{
           
            window.alert(err)
        })
        history.push('/dashboard')
    }
    const handleChangeEmail = (e) =>{
        setEmail(e.target.value)
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
          <Form onSubmit={handleLogIn} >
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

export default Login;