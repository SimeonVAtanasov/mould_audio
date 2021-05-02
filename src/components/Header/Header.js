import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <nav className={styles.navBar} >
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
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
