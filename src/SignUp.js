import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

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
        <form onSubmit={handleSubmit}>
            <label className="username">Email:</label>
            <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e)=> setUsername(e.target.value)}/>

            <label className="imgProfile">ProfilePic:</label>
            <input 
            type="text" 
            id="imgProfile" 
            value={imgProfile} 
            onChange={(e)=>setImgProfile(e.target.value)}/>

            <label className="password">Password:</label>
            <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e)=> setPassword(e.target.value)}/>

            <label className="password_confirmation">Confirmation Password:</label>
            <input 
            type="password" 
            id="password_confirmation" 
            value={passwordConfirmation} 
            onChange={(e)=> setPasswordConfirmation(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>


    )
}
export default SignUp;