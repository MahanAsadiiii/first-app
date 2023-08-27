import React from 'react'
import logo from '../assets/logo-white.svg'

function CopyRight() {
  return (

    <div style={{ margin:"100px 70px", display: "flex", justifyContent: "space-between"}}>
      <img src={logo} height={50} width={100} alt="logo-sign" />
      <h5 style={{color: "white",fontFamily: "sans-serif"}}>© 2023 Mahan Asadi.</h5>
    </div>

  )
}

export default CopyRight 