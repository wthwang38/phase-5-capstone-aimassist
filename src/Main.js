import React from 'react'
import Container from './Container'
import Navbar from './Navbar'
const Main = ({user, handleLogout}) => {


  return (


    <div id='main'>
      {user ? <Navbar onLogout={handleLogout} /> : null}
      <h2>Hi, {user.username}!</h2>
      <Container user={user}/>
    </div>
  )
}

export default Main