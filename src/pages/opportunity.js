import React from "react"
import Layout from "../components/layout"
import HeadingText from "../components/HeadingText"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import classes from "./opportunity.module.css"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: {
    backgroundColor: "#c4e538",
    boxShadow: "0 0 2px 0 black",
    width: "100%",
    maxWidth: "700px",
  },
})

const Opportunity = () => {
  const myclass = useStyles()
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "businessrev.png" }) {
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
        <HeadingText text="Business Opportunity" />
        <div className={classes.hero}>
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
              We'll only go very briefly into the superb business opportunity
              with this company here as we can discuss it in depth if you decide
              to contact us to learn more. We emphasize again the main reason
              this business works so well is "FAST RESULTS THAT PEOPLE WANT TO
              SEE." Well-- they're seeing them! Whether you want to have a
              little extra part-time income or have a vision to grow a
              substantial business this could be just the right time and vehicle
              for you-as it has been for so many other people.
            </p>
          </section>
        </div>
        <div className={classes.content}>
          <Accordion classes={{ root: myclass.root }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <p>Why is this such an excellent business to be in right now?</p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                THE PRODUCTS ... all that really matters in any business is
                customer satisfaction.. if people are getting great results with
                your products they will keep using them. Continuing and growing
                sales means you'll stay in business a long time. The results
                speak for themselves.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion classes={{ root: myclass.root }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <p>How much will it cost to be in the business? </p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                About 200-400 pounds/dollars will be more than enough to get
                started.. not a fortune when you consider the cost of starting
                most conventional small businesses.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion classes={{ root: myclass.root }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <p>
                Can I run this part-time..how many hours per week might I need
                to spend on it?{" "}
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Yes, this business can be operated full or part-time .. from
                5-10 hours per week would be sufficient.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion classes={{ root: myclass.root }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <p>
                Can it be operated online only / offline only or a mix of both?
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                We would recommend concentrating on online promotion but all 3
                options are viable.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion classes={{ root: myclass.root }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <p>
                Will I be given a complete turn-key (almost) 100% "Done For Me"
                system to run this business successfully?
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Yes - you'll have full back-up of our team when you join...
                No-one will be left behind.. we'll plug you straight into a road
                to success that's working already that requires no
                qualifications or experience to operate.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion classes={{ root: myclass.root }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <p>
                Does it matter if I'm extrovert ,out-going and love talking to
                people or an introvert who's not really comfortable making
                connections?
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                No - both types of people can succeed with this and we have
                plans totally suited to the way you want to proceed that suits
                you best- and of course you can work totally at your own pace.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion classes={{ root: myclass.root }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <p>Is this opportunity open to anyone worldwide ?</p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Yes .. barring very few exceptions it can be run from anywhere.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion classes={{ root: myclass.root }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <p>
                Will there be a support team that is at my back if I need help
                even on a daily basis?{" "}
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Absolutely - the team is there and will always answer any
                question or help with any problem whatsoever you have within 24
                hours. You'll be in business for yourself but NOT by yourself.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion classes={{ root: myclass.root }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <p>
                Will you answer any questions I have before I decide to join the
                business if I'm still not sure about what I'm being offered
                here?
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Yes - contact us at any time - the details are on the "Contact
                us" page.
              </p>
            </AccordionDetails>
          </Accordion>

          <p style={{ paddingLeft: "35px" }}>
            Thank you again for your interest and if you have any questions ,
            need any issue clarified further or just need some more information
            before making a decision feel free to get in touch with us.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Opportunity
