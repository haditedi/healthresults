import React from "react"
import { Link } from "gatsby"
import MenuIcon from "@material-ui/icons/Menu"
import headerStyles from "./Header.module.css"
import Box from "@material-ui/core/Box"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logoHealth.png" }) {
        child: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.logo}>
        <Link to="/">
          <Img
            style={{ width: "160px" }}
            fluid={data.file.child.fluid}
            alt="logo"
          />
        </Link>
      </div>

      <Box
        style={{ borderRadius: "5px" }}
        component="div"
        mr="1rem"
        display={{
          xs: "block",
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
        }}
      >
        <MenuIcon
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Open Menu
        </MenuIcon>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/testimonials"
            >
              Testimonials
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/opportunity"
            >
              Business Opportunity
            </Link>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              Contact/Privacy
            </Link>
          </MenuItem>
        </Menu>
      </Box>

      <nav id="myid" className={headerStyles.notshow}>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/testimonials"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/opportunity"
            >
              Business Opportunity
            </Link>
          </li>

          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              Contact/Privacy
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
