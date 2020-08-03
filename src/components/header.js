import React from "react"
import { Link } from "gatsby"
import MenuIcon from "@material-ui/icons/Menu"
import headerStyles from "./Header.module.css"
import Box from "@material-ui/core/Box"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import logo from "../images/logo.png"

const Header = () => {
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
          <img
            style={{ width: "70px", margin: "5px 10px 0", padding: "0" }}
            src={logo}
            alt="logo"
          />
        </Link>
      </div>

      <Box
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
              to="/application"
            >
              Application
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/how-it-works"
            >
              How It Works
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/examples"
            >
              Examples
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              Contact Us
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
              to="/application"
            >
              Application
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/how-it-works"
            >
              How It Works
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/examples"
            >
              Examples
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
