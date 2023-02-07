

import React from 'react'
import classname from "classnames"
import cls from "./DotsSlider.module.scss"

export default function DotsSlider({currentSlider, dotsIndex}) {
  return (
    <div className={
      currentSlider === dotsIndex + 1
        ? classname(cls.dots_slider, cls.activeDots)
        : cls.dots_slider
    }></div>
  )
}
