import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <nav  >
      <ul className={styles.navBar}>
        <li className={styles.navLinks}>
          <Link
            to="/about"
            className={styles.navLink}
          >
            ABOUT
          </Link>
        </li>

        <li className={styles.navLinks} >
          <Link
            to="/releases"
            className={styles.navLink}
          >
            RELEASES
          </Link>
        </li>
        <li className={styles.navLinks}>
          <Link
            to="/"
          >
            <StaticImage
              src={`../../../static/images/mouldLogoText.png`}
              width={200}
              quality={80}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="MOULD AUDIO"
            />
          </Link>
        </li>
        <li className={styles.navLinks}>
          <Link
            to="/radio"
            className={styles.navLink}
          >
            RADIO
          </Link>
        </li>
        <li className={styles.navLinks}>
          <Link
            to="/store"
            className={styles.navLink}
          >
            STORE
          </Link>
        </li>

      </ul>





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
