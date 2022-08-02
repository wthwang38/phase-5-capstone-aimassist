import React from 'react'
import Container from './Container'
import NavBar from './NavBar'
const Main = ({user, handleLogout}) => {


  return (


    <div id='main'>
      {user ? <NavBar onLogout={handleLogout} /> : null}
      <h2>Hi, {user.username}!</h2>
      <Container user={user}/>
      {/* <Leaderboard/> */}
    </div>
  )
}

export default Main