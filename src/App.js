import "bootstrap/dist/css/bootstrap.min.css";
import React, {useEffect, useState} from 'react'
import Main from './Main';
import {Routes, Route, useNavigate} from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import UserProfile from './UserProfile';
import Leaderboard from './Leaderboard';
import NavBar from "./NavBar";
function App() {
  let navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [updateP, setUpdateP] = useState(false)
  useEffect(()=>{
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, [updateP]);
 
  function handleLogout() {
    setUser(null)
    navigate('/')
  }
  if (!user) return <Home onLogin={setUser} />;
  
    return( 
      <div className="App">

        {user ? <NavBar onLogout={handleLogout} /> : null}
        <Routes>
          <Route path="/" element={<Home onLogin={setUser} />}/> 
          <Route path="/main" element={<Main user={user} setUser={setUser} handleLogout={handleLogout} updateP={updateP} setUpdateP={setUpdateP}/>}/> 
          <Route path="/all" element={<Leaderboard updateP={updateP}/>}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/login" element={<Login />}/>
           <Route path="/me" element={<UserProfile user={user}/>}/>
      </Routes>
    </div>
    )
}

export default App;
