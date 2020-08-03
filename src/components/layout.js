import React from "react"
import { Helmet } from "react-helmet"
import Header from "./Header"
import Footer from "./Footer"
import layoutStyles from "./Layout.module.css"
import favicon from "../images/favicon.png"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <Helmet>
        <html lang="en" />
        <link rel="icon" href={favicon} />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <div className={layoutStyles.content}>
        <Header />
        <section style={{ marginTop: "120px" }}>{props.children}</section>

        <Footer />
      </div>
    </div>
  )
}

export default Layout
