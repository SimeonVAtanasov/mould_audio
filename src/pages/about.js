import * as React from "react"
import * as styles from "../assets/styles/playerPage.module.scss"
import Layout from "../components/Layout/layout.js"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const About = () => (
  <Layout>
    <Seo title="About" />
    <div className={styles.playerWrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.titleContainer}>
          <h1>
            Ruben Ganev
          </h1>
          <p>
            Recording Artist, Dj & Founder of @mouldaudio
          </p>
        </div>

        {/* <div className={styles.contentContainer}>
          sdgdfgdsfgsdfgsdfgsdfgsdfgdsfgsdfgsdfgsdfgsdsfgsdfgdfgdsg
        </div> */}
      </div>

      <StaticImage
        src={`https://i1.sndcdn.com/avatars-AtLiBNaGWkVHaOrd-3sVAUA-t500x500.jpg`}
        width={450}
        quality={100}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Ruben Ganev"
        style={{borderRadius: '50%'}}
      />
    </div>
  </Layout>
)

export default About
