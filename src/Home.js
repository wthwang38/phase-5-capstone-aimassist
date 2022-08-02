import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

function Home({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div>
            {showLogin ? (
            <div>
                <header id="home_header">AIM ASSIST</header>
                <Login onLogin={onLogin} />
                 <p>
                     Don't have an account? &nbsp;
                     <button color="secondary" onClick={() => setShowLogin(false)}>
                         Sign Up
                    </button>
                </p>
            </div>
            ) : (
            <div>
                <header id="home_header">AIM ASSIST</header>
                 <SignUp onSignUp={onLogin} />
                 <p>
                     Already have an account? &nbsp;
                    <button color="secondary" onClick={() => setShowLogin(true)}>
                           Log In
                    </button>
                </p>
            </div>
            )}
            </div>
    );
}

export default Home;