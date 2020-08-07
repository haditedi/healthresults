import React from "react"

const Card = ({ mainText, children, style }) => {
  return (
    <div
      data-sal="slide-up"
      data-sal-easing="ease"
      data-sal-duration="1000"
      style={{
        ...style,
        maxWidth: "750px",
        padding: "10px 10px 20px",
        margin: "20px",
        borderRadius: "5px",
      }}
    >
      <h3
        style={{
          textTransform: "capitalize",
          padding: "10px 10px 30px",
          textAlign: "center",
        }}
      >
        {mainText}
      </h3>
      {children}
    </div>
  )
}

export default Card
