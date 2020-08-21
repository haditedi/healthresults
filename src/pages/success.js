import React from "react"
import Layout from "../components/layout"
import HeadingText from "../components/HeadingText"

const success = () => {
  return (
    <Layout>
      <div style={{ backgroundColor: "white" }}>
        <HeadingText text="Thank you for your enquiry" />
      </div>
      <div style={{ textAlign: "center" }}>
        <p style={{ margin: "30px 15px", padding: "15px" }}>
          We have received your query and will get back to you as soon as
          possible.
        </p>
      </div>
    </Layout>
  )
}

export default success
