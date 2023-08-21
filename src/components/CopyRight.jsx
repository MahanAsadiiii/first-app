import React from 'react'
import logo from '../assets/logo-white.svg'

function CopyRight() {
  return (

    <div style={{display:"flex", justifyContent: "space-between", padding:"40px"}} >
      <img src={logo} height={40} width={120} alt="logo-sign" />
      <h5 style={{color: "white",fontSize:"16px"}}>© 2023 Mahan Asadi.</h5>
    </div>

  )
}

export default CopyRight 