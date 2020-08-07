import React from "react"

const Divider = ({ style }) => {
  return (
    <div
      style={{
        ...style,
        width: "20%",
        margin: "15px auto 35px",
        opacity: "0.5",
        borderBottom: "3px solid",
        borderWidth: "1px",
      }}
    ></div>
  )
}

export default Divider
