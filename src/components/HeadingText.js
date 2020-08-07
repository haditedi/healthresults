import React from "react"

const HeadingText = ({ text }) => {
  return (
    <div
      style={{
        textAlign: "center",
        margin: "auto",
        padding: "15px 40px",
        width: "100%",
        backgroundColor: "#7f8fa6",
        minHeight: "30px",
      }}
    >
      <h1 className="fadeIn">{text}</h1>
    </div>
  )
}

export default HeadingText
