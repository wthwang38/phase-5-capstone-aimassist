import React from 'react'
import Container from './Container'
//import NavBar from './NavBar'
const Main = ({user, updateP, setUpdateP}) => {


  return (


    <div id='main'>
      {/* {user ? <NavBar onLogout={handleLogout} /> : null} */}
      <h2>Hi, {user.username}!</h2>
      <img src={user.img_profile} style={{width: "100px"}}alt="profile"/>
      <Container user={user} updateP={updateP} setUpdateP={setUpdateP}/>
    </div>
  )
}

export default Main