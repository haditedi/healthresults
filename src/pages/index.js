import React from "react"
import Layout from "../components/layout"
// import HeadingText from "../components/HeadingText"
import Card from "../components/Card"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FormHelperText } from "@material-ui/core"
import classes from "./home.module.css"
import { Link } from "gatsby"
//import test from "../images/property.svg"

const Index = () => {
  const style = {
    container: {
      margin: "0 auto",
      maxWidth: "1500px",
      position: "relative",
    },
  }
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "herohealthrev.png" }) {
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
      <div style={style.container}>
        <section style={{ margin: "80px 0 0", padding: "0" }}>
          <Img
            style={{
              margin: "0",
              padding: "0",
              height: "100%",
              maxHeight: "800px",
            }}
            fluid={data.file.childImageSharp.fluid}
            alt="woman doing yoga"
          />
        </section>
        <section
          style={{
            position: "absolute",
            top: "20px",
            padding: "0 20px",
            backgroundColor: "rgba(153, 153, 153, 0.5)",
          }}
        >
          <h1 style={{ color: "white", textAlign: "center" }}>
            When you look for a solution in health, business and our hectic
            time-pressed lives- what matters most?
          </h1>
        </section>
      </div>
      <div>
        <section className={classes.content}>
          <h3>
            Results... FAST RESULTS ! Everyone wants them. "Solve my problem -
            and do it Yesterday!"
          </h3>
          <br />
          <p>
            Well.. we can't promise yesterday.. but as you'll see in the
            examples and testimonials here - FAST we can deliver. Many companies
            have products that offer weight loss, better sleep, more energy,
            improved skin condition, greater focus and concentration and lot's
            more. And they do it with 100% safe natural remedies that have no
            harmful side effects. Our company does as well... BUT what makes us
            unique is the speed with which people are seeing positive results.
            The testimonial below is an example of how quick a great result can
            be achieved using the products. Check out the testimonials page for
            lots more examples.
          </p>
        </section>

        <section className={classes.video}>
          <h3>Video</h3>
        </section>

        <section className={classes.guarantee}>
          <h3>
            All the company products have a full 30 day money-back guarantee if
            you're completely happy with the results you get after taking them.
          </h3>
          <p>
            Check out the rest of the site for further details You may just wish
            to use the products for all their health benefits and have no
            interest in building a part-time/full-time business for yourself
            with the superb benefits they offer. That's not a problem..but if
            you do want to check out what a great business opportunity this is.
            <Link to="/opportunity"> Click here</Link> or on the "business
            opportunity" link above for details. Thank you for looking in on our
            site.
          </p>
        </section>
      </div>
    </Layout>
  )
}

export default Index
