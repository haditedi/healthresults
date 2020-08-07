import React from "react"
import Layout from "../components/layout"
// import HeadingText from "../components/HeadingText"
import Card from "../components/Card"
// import { graphql, useStaticQuery } from "gatsby"
//import Img from "gatsby-image"
//import test from "../images/property.svg"

const Index = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     file(relativePath: { eq: "images/houseHero.jpg" }) {
  //       childImageSharp {
  //         fluid {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <Layout>
      {/* <div style={{ backgroundColor: "white" }}>
        <HeadingText text="Secured Property Investment" />
      </div> */}
      {/* <div
        style={{ textAlign: "center", minHeight: "50vw", marginBottom: "20px" }}
      >
        <img
          style={{ width: "100%", maxWidth: "1500px" }}
          src={test}
          alt="property"
        />
      </div> */}

      {/* <div>
        <Img
          style={{
            margin: "30px auto 20px",
            width: "100%",
            maxWidth: "900px",
            boxShadow: "0 0 2px 2px #7f8fa6",
          }}
          fluid={data.file.childImageSharp.fluid}
          alt="property"
        />
      </div> */}
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
            backgroundColor: "#487eb0",
            boxShadow: "0 0 2px 2px #192a56",
            color: "white",
          }}
          mainText="How to buy UK property 47% BMV and 3X your money over 10 years? Without ever lifting a finger"
        >
          <p className="paraPadd">
            This may sound too good to be true, but in fact it is 100% genuine.
            Read on to learn how the strategy works and why savvy investors are
            moving in fast!
          </p>
          <p className="paraPadd">
            It’s widely accepted that UK property investments are one of the
            world’s best 'safe haven' asset classes
          </p>
          <p className="paraPadd">
            However, with recent Section 24 tax changes, ever increasing
            regulations on landlords, ever growing tenant rights and tighter
            mortgage criteria it’s time to…
          </p>
        </Card>
        <Card
          style={{
            backgroundColor: "#718093",
            boxShadow: "0 0 2px 2px #dcdde1",
            color: "white",
          }}
          mainText="ReThink Property Investing!"
        >
          <p className="paraPadd">
            Welcome to Long-Term-Tenant property investment strategy – the
            ultimate alternate solution to the increasingly difficult,
            expensive, and risky Buy-2-Let property market
          </p>

          <p className="paraPadd" style={{ marginTop: "20px" }}>
            <b>Investment Headlines</b>
          </p>

          <ul style={{ padding: "0 10px" }}>
            <li>10 year investment into existing UK residential property.</li>
            <li>Average 47% BMV entry point.</li>
            <li>3X return.</li>
            <li>Minimum £50K. Maximum £10M.</li>
            <li>Each £100K invested will return £300K.</li>
            <li>
              Clients can exit early but this may result in a lower return.
            </li>
          </ul>
        </Card>
      </div>
    </Layout>
  )
}

export default Index
