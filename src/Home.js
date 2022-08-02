import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import {Button} from 'react-bootstrap'
import machine from "./machine-gun-fire.gif";

function Home({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div>
            <img id="bgvid" src={machine} type="gif"  alt="duckhunting"/>
            {showLogin ? (
            <div>
                <header id="home_header">AIM ASSIST</header>
                <Login onLogin={onLogin} />
                 <p>
                     Don't have an account? &nbsp;
                     <Button color="secondary" onClick={() => setShowLogin(false)}>
                         Sign Up
                    </Button>
                </p>
            </div>
            ) : (
            <div>
                <header id="home_header">AIM ASSIST</header>
                 <SignUp onSignUp={onLogin} />
                 <p>
                     Already have an account? &nbsp;
                    <Button color="secondary" onClick={() => setShowLogin(true)}>
                           Log In
                    </Button>
                </p>
            </div>
            )}
            </div>
    );
}

export default Home;