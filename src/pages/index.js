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
          Your awesome text here
        </div>
        <div>
          <StaticImage
            src={`../../public/images/logoWithoutBg.png`}
            width={350}
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="MOULD AUDIO"
            className={styles.centeredLogo}
          />
        </div>
      </div>
    </Layout>
  )

}

export default IndexPage
