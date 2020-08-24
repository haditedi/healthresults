import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import classes from "./home.module.css"
import { Link } from "gatsby"
import SEO from "../components/seo"

const Index = () => {
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
      <SEO
        title="Great Health Products made from 100% safe natural remedies that have no harmful side effects. Comes with business opportunity."
        description="what makes us
            unique is the speed with which people are seeing positive results.
            The testimonials are an example of how quick a great result can
            be achieved using the products."
      />
      <div className={classes.container}>
        <section>
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
        <section className={classes.containerText}>
          <h1
            data-sal="zoom-in"
            data-sal-easing="ease"
            data-sal-duration="2000"
          >
            When you look for a solution in health, business and our hectic
            time-pressed lives- what matters most?
          </h1>
        </section>
      </div>
      <div>
        <section className={classes.content}>
          <h3
            data-sal="slide-right"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            Results... FAST RESULTS! Everyone wants them. "Solve my problem -
            and do it Yesterday!"
          </h3>

          <p
            data-sal="slide-left"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
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
          <iframe
            className={classes.frame}
            // width="560"
            // height="315"
            src="https://www.youtube.com/embed/RQsAr430IJQ"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h3 style={{ padding: "30px 5px" }}>More Amazing Results here...</h3>
          <iframe
            className={classes.frame}
            src="https://www.youtube.com/embed/wOnXeLwJr1k"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>

        <section className={classes.guarantee}>
          <h3
            data-sal="slide-left"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            All the company products have a full 30 day money-back guarantee if
            you're not happy with the results you get after taking them.
          </h3>
          <p
            data-sal="slide-right"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
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
