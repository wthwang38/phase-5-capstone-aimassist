import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import { NavLink } from "react-router-dom";

function Home({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div>
            {showLogin ? (
            <div>
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