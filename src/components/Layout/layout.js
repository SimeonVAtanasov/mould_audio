/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header/Header"
import HeaderMobile from "../Header/HeaderMobile"

import "./layout.css"

const Layout = ({ children }) => {

  const [isMobile, setIsMobile] = React.useState(true)
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
      { isMobile ? <HeaderMobile siteTitle={data.site.siteMetadata?.title || `MOULD AUDIO`} /> : <Header siteTitle={data.site.siteMetadata?.title || `MOULD AUDIO`} />}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
          display: "flex",
          flexDirection:"column",
          justifyContent:"center",
          alignItems: "center"
        }}
      >
        <main
          style={{
            width: '100%',
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {children}
        </main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
