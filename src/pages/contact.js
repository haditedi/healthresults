import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/ContactForm"
import { style } from "../styles/pagesStyle"
import HeadingText from "../components/HeadingText"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

const ContactUs = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "contact-us.jpg" }) {
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
        title="Contact Us"
        description="Get in touch with us either by phone or the enquiry form."
      />
      <div>
        <HeadingText text="Contact Us" />
      </div>

      <div>
        <Img
          style={{ margin: "20px auto 20px", width: "100%", maxWidth: "900px" }}
          fluid={data.file.childImageSharp.fluid}
          alt="contact us"
        />
      </div>

      <div style={style.main}>
        <section style={style.section}>
          <p style={style.para}>
            If you need any more information feel free to complete the enquiry
            form below and we'll get back to you with an answer asap.{" "}
          </p>
          <p>
            Alternately you can call us any time on 02037468731 or 07427586821{" "}
          </p>
          <p>
            If no-one answers immediately please leave a message and we'll call
            you back very soon -usually within 24-48 hours maximum
          </p>
        </section>
        <section style={style.section}>
          <ContactForm />
        </section>
      </div>
    </Layout>
  )
}

export default ContactUs
