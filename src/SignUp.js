import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
const SignUp = ({onSignUp})=> {
    const [username, setUsername] = useState("")
    const [imgProfile, setImgProfile] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] 
    = useState("")

    let navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault();
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                img_profile: imgProfile,
                password_confirmation: passwordConfirmation,
            }), 
        }).then((res) =>{
            if(res.ok){
                res.json().then((user)=> onSignUp(user))
                navigate("/main")
            }
        })
    }

    return(
        <div>
        <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label >Email:</Form.Label>
            <Form.Control
            type="text" 
            id="username" 
            value={username} 
            onChange={(e)=> setUsername(e.target.value)}/>
            </Form.Group>
                <Form.Group className="mb-3">
             <Form.Label >ProfileUrl:</Form.Label>
            <Form.Control
            type="text" 
            id="imgProfile" 
            value={imgProfile} 
            onChange={(e)=>setImgProfile(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label >Password:</Form.Label>
            <Form.Control
            type="password" 
            id="password" 
            value={password} 
            onChange={(e)=> setPassword(e.target.value)}/>
            </Form.Group>
            <Form.Group>
            <Form.Label className="password_confirmation">Confirmation Password:</Form.Label>
            <Form.Control 
            type="password" 
            id="password_confirmation" 
            value={passwordConfirmation} 
            onChange={(e)=> setPasswordConfirmation(e.target.value)}/>
            </Form.Group>
            <Button type="submit" variant="danger">Submit</Button>
        </Form>
        </div>

    )
}
export default SignUp;