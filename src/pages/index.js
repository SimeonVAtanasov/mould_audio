import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../styles/indexPage.module.scss"
import Layout from "../components/Layout/layout.js"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <StaticImage
      src="../../images/mouldLogo.png"
      width={300}
      quality={100}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="MOULD AUDIO"
      className={styles.centeredLogo}
    />

  </Layout>
)

export default IndexPage
