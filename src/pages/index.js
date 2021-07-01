import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../assets/styles/indexPage.module.scss"
import Layout from "../components/Layout/layout.js"
import Seo from "../components/seo"

const IndexPage = () => {

  return (
    <Layout>
      <Seo title="Home" />
      <div className={styles.mainWrapper}>
        <div className={styles.vision}>
          Berlin based Record Label, <br/>
          curated by Ruben Ganev
        </div>
        <div>
          <StaticImage
            src={`../../static/logoWithoutBg.png`}
            width={350}
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="MOULD AUDIO"
          />
        </div>
      </div>
    </Layout>
  )

}

export default IndexPage
