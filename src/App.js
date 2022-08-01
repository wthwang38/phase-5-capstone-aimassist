import React, {useEffect, useState} from 'react'
import Main from './Main';
import Navbar from './Navbar';
import {Routes, Route, useNavigate} from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import UserProfile from './UserProfile';

function App() {
  let navigate = useNavigate()
  const [user, setUser] = useState(null)

  useEffect(()=>{
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  
  function handleLogout() {
    setUser(null)
    navigate('/')
  }
  if (!user) return <Home onLogin={setUser} />;
  console.log(user.username)
    return( 
      <div className="App">
        <Navbar onLogout={handleLogout} />
        <h2>Hi, {user.username}!</h2>
        <Routes>
          <Route path="/" element={<Home onLogin={setUser} />}/> 
          <Route path="/main" element={<Main user={user} setUser={setUser} />}/> 
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/login" element={<Login />}/>
           <Route path="/me" element={<UserProfile />}/>
      </Routes>
    </div>
    )
}

export default App;
