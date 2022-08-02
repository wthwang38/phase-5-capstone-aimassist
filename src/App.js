import React, {useEffect, useState} from 'react'
import Main from './Main';
import {Routes, Route, useNavigate} from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import UserProfile from './UserProfile';
import Leaderboard from './Leaderboard';
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
  console.log(user)
  function handleLogout() {
    setUser(null)
    navigate('/')
  }
  if (!user) return <Home onLogin={setUser} />;
  console.log(user.name)
    return( 
      <div className="App">

        
        <Routes>
          <Route path="/" element={<Home onLogin={setUser} />}/> 
          <Route path="/main" element={<Main user={user} setUser={setUser} handleLogout={handleLogout}/>}/> 
          <Route path="/all" element={<Leaderboard/>}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/login" element={<Login />}/>
           <Route path="/me" element={<UserProfile user={user}/>}/>
      </Routes>
    </div>
    )
}

export default App;
