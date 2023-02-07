

import classnames from 'classnames'
import React from 'react'
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md"

import cls from "./SliderButton.module.scss"

export default function SliderButton({direct, handleClick}) {
  
  return (
    <button 
      className={
        classnames(cls.slider_button, cls[direct])} 
        onClick={handleClick}
    >
      {
        direct === "left"
        ? <MdArrowBackIosNew/>
        : <MdArrowForwardIos/>
      }
    </button>
  )
}
