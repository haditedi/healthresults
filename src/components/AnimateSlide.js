import React from "react"

const AnimateSlide = props => {
  return (
    <div data-sal="slide-up" data-sal-easing="ease" data-sal-duration="1000">
      {props.children}
    </div>
  )
}

export default AnimateSlide
