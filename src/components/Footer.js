import React from "react"
import footerStyles from "./Footer.module.css"

const Footer = () => {
  return (
    <div>
      <p style={{ padding: "15px", textAlign: "center" }}>
        To check out in full the company details check here{" "}
        <a
          href="https://www.bepic.com/answers"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.bepic.com/answers
        </a>
      </p>
      <footer className={footerStyles.footer}>
        <h5 style={{ fontSize: "1em" }}>Health Results</h5>
      </footer>
    </div>
  )
}

export default Footer
