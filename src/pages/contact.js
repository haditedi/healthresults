import React from "react"
import Layout from "../components/Layout"
import HeadingText from "../components/HeadingText"
import ContactForm from "../components/ContactForm"
import { style } from "../styles/pagesStyle"
//import { graphql, useStaticQuery } from "gatsby"
//import Img from "gatsby-image"
import SEO from "../components/SEO"

const ContactUs = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     file(relativePath: { eq: "images/contact-us.jpg" }) {
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
      <SEO
        title="Contact Us | "
        description="Get in touch with us either by phone or the enquiry form."
      />
      <div style={{ backgroundColor: "white" }}>
        <HeadingText text="Contact Us" />
      </div>

      {/* <div>
        <Img
          style={{ margin: "40px auto 20px", width: "100%", maxWidth: "900px" }}
          fluid={data.file.childImageSharp.fluid}
          alt="contact"
        />
      </div> */}

      <div style={style.main}>
        <section style={style.section}>
          <h3>Our contact details are listed below.. </h3>
          <p style={style.para}>Secured Property Investment</p>
          <p>address</p>
          <p>Tel.</p>
        </section>
        <section style={style.section}>
          <ContactForm />
        </section>
      </div>
    </Layout>
  )
}

export default ContactUs
