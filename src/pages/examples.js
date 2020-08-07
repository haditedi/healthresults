import React from "react"
import Layout from "../components/Layout"
import HeadingText from "../components/HeadingText"
import AnimateSlide from "../components/AnimateSlide"
import { style } from "../styles/pagesStyle"
import Button from "@material-ui/core/Button"
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined"
import SEO from "../components/SEO"
import { graphql, useStaticQuery } from "gatsby"

const Examples = () => {
  const data = useStaticQuery(graphql`
    query {
      east: file(relativePath: { eq: "pdf/1bedEastbourne.pdf" }) {
        publicURL
      }
      buck: file(relativePath: { eq: "pdf/2bedBucks.pdf" }) {
        publicURL
      }
      norwich: file(relativePath: { eq: "pdf/2bedNorwich.pdf" }) {
        publicURL
      }
      sleaford: file(relativePath: { eq: "pdf/3bedSleaford.pdf" }) {
        publicURL
      }
      folkestone: file(relativePath: { eq: "pdf/4bedFolkstone.pdf" }) {
        publicURL
      }
      surrey: file(relativePath: { eq: "pdf/4bedSurrey.pdf" }) {
        publicURL
      }
    }
  `)

  return (
    <Layout>
      <SEO title="" description="" />
      <div style={{ backgroundColor: "white" }}>
        <HeadingText text="See Below Some Examples of Property Purchased" />
      </div>
      <div style={style.main}>
        <section style={style.section}>
          <h3>Example Property Deals :</h3>

          <AnimateSlide>
            <p style={style.paraHead}>
              <b>Property 1:</b>
            </p>
            <p>
              1 bed apartment, Eastbourne. <br />
              RICS valuation £90,000, Discount 58.5%, Purchase Price £37,350{" "}
              <br />
              Tenant – female age 71.
              <br />
              <b>
                Projected 10 year profit = £95,872 = 257% ROI = 26% annualised.
              </b>
            </p>
            <a
              href={data.east.publicURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                style={{ margin: "10px 0", backgroundColor: "#273c75" }}
                variant="contained"
                color="primary"
                startIcon={<HomeOutlinedIcon />}
              >
                View Property{" "}
              </Button>{" "}
            </a>
          </AnimateSlide>

          <AnimateSlide>
            <p style={style.paraHead}>
              <b>Property 2:</b>
            </p>
            <p>
              2 bed apartment, Norwich, Norfolk. <br />
              RICS valuation £215,000, Discount 56.5%, Purchase price £93,501
              <br />
              Tenants – male age 72 & female age 69.
              <br />
              <b>
                Projected 10 year profit = £224,728 = 240% ROI = 24% annualised.
              </b>
            </p>
            <a
              href={data.norwich.publicURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                style={{ margin: "10px 0", backgroundColor: "#273c75" }}
                variant="contained"
                color="primary"
                startIcon={<HomeOutlinedIcon />}
              >
                View Property{" "}
              </Button>{" "}
            </a>
          </AnimateSlide>

          <AnimateSlide>
            <p style={style.paraHead}>
              <b>Property 3:</b>
            </p>
            <p>
              2 bed apartment, High-Wycombe, Buckinghamshire. <br />
              RICS valuation £210,000, Discount 51.73%, Purchase price £108,636
              <br />
              Tenant – male age 69.
              <br />
              <b>
                Projected 10 year profit = £209,484 = 207% ROI = 21% annualised.
              </b>
            </p>
            <a
              href={data.buck.publicURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                style={{ margin: "10px 0", backgroundColor: "#273c75" }}
                variant="contained"
                color="primary"
                startIcon={<HomeOutlinedIcon />}
              >
                View Property{" "}
              </Button>{" "}
            </a>
          </AnimateSlide>

          <AnimateSlide>
            <p style={style.paraHead}>
              <b>Property 4:</b>
            </p>
            <p>
              3 bed bungalow, Sleaford, Lincolnshire. <br />
              RICS valuation £220,000, Discount 51.1%, Purchase price £107,546
              <br />
              Tenants – male age 68 & female age 72.
              <br />
              <b>
                Projected 10 year profit = £218,074 = 203% ROI = 20% annualised.
              </b>
            </p>
            <a
              href={data.sleaford.publicURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                style={{ margin: "10px 0", backgroundColor: "#273c75" }}
                variant="contained"
                color="primary"
                startIcon={<HomeOutlinedIcon />}
              >
                View Property{" "}
              </Button>{" "}
            </a>
          </AnimateSlide>

          <AnimateSlide>
            <p style={style.paraHead}>
              <b>Property 5:</b>
            </p>
            <p>
              4 bed house, Folkestone, Kent. <br />
              RICS valuation £380,000, Discount 55.27%, Purchase price £169,950
              <br />
              Tenants – male age 68 & female age 72.
              <br />
              <b>
                Projected 10 year profit = £392,519 = 231% ROI = 23% annualised
              </b>
            </p>
            <a
              href={data.folkestone.publicURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                style={{ margin: "10px 0", backgroundColor: "#273c75" }}
                variant="contained"
                color="primary"
                startIcon={<HomeOutlinedIcon />}
              >
                View Property{" "}
              </Button>{" "}
            </a>
          </AnimateSlide>

          <AnimateSlide>
            <p style={style.paraHead}>
              <b>Property 6:</b>
            </p>
            <p>
              4 bed apartment, Reigate, Surrey. <br />
              RICS valuation £480,000, Discount 54%. Purchase price £219,660
              <br />
              Tenant – female aged 66.
              <br />
              <b>
                Projected 10 year profit = £489,717 = 222% ROI = 22% annualised
              </b>
            </p>
            <a
              href={data.surrey.publicURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                style={{ margin: "10px 0", backgroundColor: "#273c75" }}
                variant="contained"
                color="primary"
                startIcon={<HomeOutlinedIcon />}
              >
                View Property{" "}
              </Button>{" "}
            </a>
          </AnimateSlide>

          <p style={style.paraHead}>
            <b>Please get in touch if you would like to…</b>
          </p>
          <ul>
            <li>
              Discover how you could benefit from a <b>Long-Term-Tenant</b>{" "}
              investment
            </li>
            <li>Share your thoughts and feedback (all comments welcome).</li>
            <li>Have your questions answered.</li>
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export default Examples
