import React from 'react';
import { Link,useNavigate } from 'react-router-dom'
const Navbar = ({ onLogout })=>{
    let navigate = useNavigate()
    function handleLogout(){
        fetch("/logout", {
            method: "DELETE",
        })
        .then((r)=>{
            if(r.ok){ 
                navigate("/")
                onLogout()
            }
        });
    }
    
    return (
    <nav id="Nav">
        <Link to="/all">Leaderboard</Link>
        <break> || </break>
        <Link to="/main">Play</Link>
            <break> || </break>
        <Link to="/me">User Profile</Link>

            <break> || </break>
        <button onClick={handleLogout}>Logout</button>
    </nav>

    )
}

export default Navbar;