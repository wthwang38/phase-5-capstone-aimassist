import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Button} from 'react-bootstrap'

const NavBar = ({ onLogout })=>{
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
    <Navbar bg="info" variant="info">
        <Nav classNmae="me-auto">
        <NavLink className="link" to="/all"><Button variant="light">Leaderboard</Button></NavLink>
       
        <NavLink className="link" to="/main"><Button variant="danger">Play</Button></NavLink>
           
        <NavLink className="link" to="/me"><Button>User Profile</Button></NavLink>
        
        
        <button onClick={handleLogout}><b>Logout</b></button>
        </Nav>
        </Navbar>
    )
}

export default NavBar;