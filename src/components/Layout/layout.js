import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import HeaderMobile from "../Header/HeaderMobile"
import Header from "../Header/Header"
import CookiePolicy from "../CookiePolicy/CookiePolicy"

import "./layout.css"
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

  const [isMobile, setIsMobile] = React.useState(true);

  React.useEffect(() => {
    if (window.innerWidth > 600) {
      setIsMobile(false)
    }
  }, [])


  return (
    <>
      <HeaderMobile siteTitle={data.site.siteMetadata?.title || `MOULD AUDIO`} />
      <Header siteTitle={data.site.siteMetadata?.title || `MOULD AUDIO`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1200,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <main
          style={{
            // width: '100%',
            // display: "flex",
            // flexDirection: "column",
            // justifyContent: "center",
            // alignItems: "center",
          }}
        >
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
