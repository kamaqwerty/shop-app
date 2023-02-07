

import React from 'react'
import { Link } from 'react-router-dom'
import "./AuthNavigate.scss"

export default function AuthNavigate({location}) {
  return (
    <Link 
      className='authNaviggate_link'
      to={location === "Register" ? "/auth/login" : "/auth/register"}>
      {
        location === "Register"
          ? "Already have an account?"
          : "You dont have an account?"
      }
    </Link>
  )
};
