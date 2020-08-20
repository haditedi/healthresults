import React from "react"

const HeadingText = ({ text }) => {
  return (
    <div
      style={{
        textAlign: "center",
        margin: "auto",
        padding: "30px 40px",
        width: "100%",

        minHeight: "30px",
      }}
    >
      <h1 data-sal="fade-in" data-sal-easing="ease" data-sal-duration="1000">
        {text}
      </h1>
    </div>
  )
}

export default HeadingText
