import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../css/font-awesome.css"
import "../css/style.scss"
import SEO from "../components/seo"
import Navbar from "../components/navbar"

const Header = ({ siteTitle }) => (
  <header className="site-header">
    <SEO></SEO>
    <Navbar />
  </header >
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
