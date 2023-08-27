import React from 'react'
import logo from '../assets/logo-white.svg'

function CopyRight() {
  return (

    <div className='flex items-center justify-between bg-black text-white py-2 px-3 md:px-14'>
      <img src={logo} height={50} width={100} alt="logo-sign" />
      <h5 className='text-xs font-light '>© 2023 Mahan Asadi.</h5>
    </div>

  )
}

export { CopyRight }