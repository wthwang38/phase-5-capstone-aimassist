import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import {Form} from 'react-bootstrap'
const Login = ({ onLogin })=> {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    let navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password }),
        })
            .then((r) =>{
                setIsLoading(false);
                if(r.ok) {
                    r.json().then((user)=> {
                    onLogin(user)
                    navigate("/main")
                });
                } else {
                    r.json().then((error)=>setErrors(error.errors));
                }
            });
    }

return (
    <div>
    <Form onSubmit={handleSubmit}>    
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
                type="text"
                value={username} 
                onChange={(e)=> setUsername(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password:</Form.Label>
        <Form.Control
        type="password" 
        autoComplete='current-password'
        value={password} 
        onChange={(e)=> setPassword(e.target.value)}/>
    </Form.Group>
        <Button type="submit" variant="danger">{isLoading ? "Loading..." : "Login"}</Button>
        {errors.map((error)=> (<div key={error}>{error}</div>))}
    </Form>
    </div>
    );
}

export default Login;