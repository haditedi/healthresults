import React from "react"
import footerStyles from "./Footer.module.css"

const Footer = () => {
  return (
    <div>
      <footer className={footerStyles.footer}>
        <h5 style={{ fontSize: "1em" }}>Secured Property Investment</h5>
      </footer>
    </div>
  )
}

export default Footer
