import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import HeadingText from "../components/HeadingText"
import Card from "../components/Card"
import SEO from "../components/SEO"

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/Bridging-Loans.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO
        title="Loans and Development Finance | Phil Walker Bridging"
        description="Fast Solutions for bridging loans and development finance in London and United Kingdom. With over 30 years of experience, we help with your loans by connecting you with a suitable lender and aim to get a decision in principle within 24 - 48 hours provided all fields in application are completed."
      />

      <HeadingText text="FAST SOLUTIONS FOR BRIDGING LOANS AND DEVELOPMENT FINANCE" />

      <div>
        <Img
          style={{ margin: "0 auto 20px", width: "100%", maxWidth: "900px" }}
          fluid={data.file.childImageSharp.fluid}
          alt="bridging loan"
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Card
          style={{
            backgroundColor: "#7bed9f",
            boxShadow: "0 0 2px 2px #2ed573",
          }}
          mainText="Welcome To Phil Walker Bridging, A One-Stop Shop For All Your Bridging And Finance Needs."
          para="With over 30 years of experience in the market, and access to all the top lenders, we make the complicated, sometimes daunting task of securing finance, quick, easy and straightforward."
        />
        <Card
          style={{
            backgroundColor: "#ff6b81",
            boxShadow: "0 0 2px 2px #ff4757",
            color: "#f1f2f6",
          }}
          mainText="Most developer´s applications fail because of a poorly presented file"
          para="Unfortunately, most developers never receive any feedback and therefore
        never know why the application failed. This leads to getting caught in a
        cycle going round lots of different lenders, ultimately with no joy. We
        remove all those obstacles. Not only does working with us mean that your
        file will be presented properly, but it will be presented to the very
        best lender suited to your situation. All of this, in a timely fashion."
        />
        <Card
          style={{
            backgroundColor: "#7bed9f",
            boxShadow: "0 0 2px 2px #2ed573",
          }}
          mainText="We aim to get an answer to your completed application and a Decision in principle in 24-48 hours"
          para="Provided you have answered all the questions in full as accurately and truthfully as you can based on the current information you have on your specific loan requirements. If for whatever reason we cannot meet your funding requirements we will let you know promptly and not put you to the inconvenience of waiting for weeks before telling you that your application has been turned down."
        />
      </div>
    </Layout>
  )
}
