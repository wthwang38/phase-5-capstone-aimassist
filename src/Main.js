import React from 'react'
import Container from './Container'
//import NavBar from './NavBar'
const Main = ({user, updateP, setUpdateP, setUPAvg, setUPHitAcc, setUPHits, setUPMissed, setUPTotal}) => {


  return (


    <div id='main'>
      {/* {user ? <NavBar onLogout={handleLogout} /> : null} */}
      <h2>Hi, {user.username}!</h2>
      <img src={user.img_profile} style={{width: "100px"}}alt="profile"/>
      <Container user={user} updateP={updateP} setUpdateP={setUpdateP} setUPHits={setUPHits} setUPTotal={setUPTotal} setUPMissed={setUPMissed} setUPAvg={setUPAvg} setUPHitAcc={setUPHitAcc} />
    </div>
  )
}

export default Main