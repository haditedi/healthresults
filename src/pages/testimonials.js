import React from "react"
import Layout from "../components/layout"
import HeadingText from "../components/HeadingText"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import classOp from "./opportunity.module.css"
import classHome from "./home.module.css"

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "testimonial.jpg" }) {
        child: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fb: file(relativePath: { eq: "testimonialFb.png" }) {
        child: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div>
        <HeadingText text="Testimonials" />
        <div className={classOp.hero}>
          <section
            data-sal="slide-right"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <Img
              style={{ width: "400px" }}
              fluid={data.file.child.fluid}
              alt="a group of people discussing"
            />
          </section>
          <section
            data-sal="slide-left"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <p style={{ padding: "25px" }}>
              Below are just some of the 100's of testimonials on the benefits
              of the products. There are loads more and you'll find many on the
              various social media platforms. There is an official Facebook page
              devoted solely to testimonials{" "}
              <a
                href="https://www.facebook.com/groups/740004836404298/"
                target="_blank"
                rel="noopener noreferrer"
              >
                - click here -
              </a>
            </p>
          </section>
        </div>
        <div className={classOp.content}>
          <iframe
            className={classHome.frame}
            src="https://www.youtube.com/embed/O66ti3npNIg"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h2 style={{ padding: "40px 5px" }}>And more great results...</h2>
          <iframe
            className={classHome.frame}
            src="https://www.youtube.com/embed/9uqvNXFsuO0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            style={{ marginTop: "40px" }}
            className={classHome.frame}
            src="https://www.youtube.com/embed/DxbgfaLEgUg"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <section className={classOp.display}>
            <a
              href="https://www.facebook.com/frank.vandy.9/posts/10158668217686499?hc_location=ufi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img
                style={{ width: "900px", marginTop: "40px" }}
                fluid={data.fb.child.fluid}
                alt="facebook comments"
              />
            </a>
          </section>

          <h2 style={{ padding: "40px 5px" }}>
            And still more!!.. Great results just keep on coming!!
          </h2>

          <iframe
            className={classHome.frame}
            src="https://www.youtube.com/embed/ENlRBx3alBI"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <p
            style={{
              margin: "10px",
              padding: "30px 5px 10px",
              textAlign: "center",
              width: "100%",
            }}
          >
            To see a fuller range of the many testimonials that keeping coming
            to us all the time check this{" "}
            <a
              href="https://www.facebook.com/groups/740004836404298/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook link.
            </a>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Testimonials
