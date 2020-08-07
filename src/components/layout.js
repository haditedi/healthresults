import React from "react"
import { Helmet } from "react-helmet"
import Header from "./header"
import Footer from "./Footer"
import layoutStyles from "./Layout.module.css"
//import favicon from "../images/favicon.png"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <Helmet>
        <html lang="en" />
        {/* <link rel="icon" href={favicon} /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      <div className={layoutStyles.content}>
        <section style={{ marginTop: "80px" }}>{props.children}</section>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
