import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = ({ onLogout })=>{
    function handleLogout(){
        fetch("/logout", {
            method: "DELETE",
        })
        .then((r)=>{
            if(r.ok){ 
                onLogout()
            }
        });
    }
    
    return (
    <header>
        <Link to="/">Home</Link>
        <Link to="/main">Play</Link>
        <Link to="/me">User Profile</Link>
        <button onClick={handleLogout}>Logout</button>
    </header>

    )
}

export default Navbar;