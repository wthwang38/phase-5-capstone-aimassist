import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


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
    <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input 
        type="text" 
        id="username"
        autoComplete='off'
        value={username} 
        onChange={(e)=> setUsername(e.target.value)}/>
       
        <label htmlFor="password">Password</label>
        <input 
        type="password" id="password" autoComplete='current-password'
        value={password} 
        onChange={(e)=> setPassword(e.target.value)}/>

        <button type="submit">{isLoading ? "Loading..." : "Login"}</button>
        {errors.map((error)=> (<div key={error}>{error}</div>))}
    </form>
    );
}

export default Login;