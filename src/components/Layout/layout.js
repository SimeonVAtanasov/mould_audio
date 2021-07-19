import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import HeaderMobile from "../Header/HeaderMobile.js"
import Header from "../Header/Header"
import CookiePolicy from "../CookiePolicy/CookiePolicy"
import "./resetCSS.css"
import * as styles from "./layout.module.scss";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <HeaderMobile className={styles.headerMobile} siteTitle={data.site.siteMetadata?.title || `MOULD AUDIO`} />
      <Header className={styles.header} siteTitle={data.site.siteMetadata?.title || `MOULD AUDIO`} />
      <div className={styles.wrapper}      >
        <main className={styles.main}        >
          {children}
        </main>
      </div>
      <Footer />
      <CookiePolicy />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
