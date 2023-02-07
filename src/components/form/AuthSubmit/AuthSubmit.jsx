

import React from 'react'

import cls from "./AuthSubmit.module.scss"

export default function AuthSubmit({location}) {
  return (
    <div className={cls.auth_submit_center}>
      <button type='submit' className={cls.auth_submit}>
        {location}
      </button>
    </div>
  )
}
