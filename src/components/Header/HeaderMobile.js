import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./header.module.scss"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"


const Header = ({ siteTitle }) => (
    <header className={styles.header}>
        <Navbar expand="lg" className={styles.navBar} >
            <Link
                to="/"
                className={styles.logoText}
            >
                <StaticImage
                    src="../../images/mouldLogoText.png"
                    width={200}
                    quality={80}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="MOULD AUDIO"
                />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Link
                        to="/about"
                        className={styles.navLinks}
                    >
                        ABOUT
                </Link>
                    <Link
                        to="/releases"
                        className={styles.navLinks}
                    >
                        RELEASES
                </Link>
                    <Link
                        to="/radio"
                        className={styles.navLinks}
                    >
                        RADIO
                </Link>
                    <Link
                        to="/store"
                        className={styles.navLinks}
                    >
                        STORE
                </Link>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
