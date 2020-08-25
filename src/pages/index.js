import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import classes from "./home.module.css"
import { Link } from "gatsby"
import SEO from "../components/seo"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

const Index = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    className: classes.carousel,
    centerMode: true,
    adaptiveHeight: true,
  }

  const data = useStaticQuery(graphql`
    query {
      april: file(relativePath: { eq: "carousel/april.jpg" }) {
        child: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      body: file(relativePath: { eq: "carousel/body.jpg" }) {
        child: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      face: file(relativePath: { eq: "carousel/face.png" }) {
        child: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      marisol: file(relativePath: { eq: "carousel/marisol.jpg" }) {
        child: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hand: file(relativePath: { eq: "carousel/handbeforeafter.jpg" }) {
        child: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tracy: file(relativePath: { eq: "carousel/tracy.jpg" }) {
        child: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      man: file(relativePath: { eq: "carousel/manbeforeafter.jpg" }) {
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
      <SEO
        title="Great Health Products made from 100% safe natural remedies that have no harmful side effects. Comes with business opportunity."
        description="what makes us
            unique is the speed with which people are seeing positive results.
            The testimonials are an example of how quick a great result can
            be achieved using the products."
      />
      <div className={classes.container}>
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

      <Slider {...settings}>
        <div>
          <Img fluid={data.april.child.fluid} alt="April result" />
        </div>

        <div>
          <Img
            fluid={data.body.child.fluid}
            alt="woman showing body before and after"
          />
        </div>
        <div>
          <Img
            fluid={data.face.child.fluid}
            alt="woman showing face before and after"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Img
            fluid={data.marisol.child.fluid}
            alt="woman showing stomach before and after"
          />
        </div>
        <div>
          <Img
            fluid={data.hand.child.fluid}
            alt="hand showing before and after"
          />
        </div>
        <div>
          <Img
            fluid={data.tracy.child.fluid}
            alt="Tracy's face showing before and after"
          />
        </div>
        <div>
          <Img
            fluid={data.man.child.fluid}
            alt="man body showing before and after"
          />
        </div>
      </Slider>

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
