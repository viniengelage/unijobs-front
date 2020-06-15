import React from 'react'

import "./CardSignUp.css"

import logo from '../imgs/UniJobsBlue.svg'

const CardSignUp = ({children}) => {
  return(
    <div className="card-box">
      <div className="line-green-top-box"></div>
      <img src={logo} className="logo-top-box" alt="Logo UniJobs"/>
      {children}
    </div>
  )
}

export default CardSignUp;