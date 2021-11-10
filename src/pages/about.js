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
          <h1>Ruben Ganev</h1>
          <p>Recording Artist, Dj & Founder of @mouldaudio</p>
        </div>

        {/* <div className={styles.contentContainer}>
          sdgdfgdsfgsdfgsdfgsdfgsdfgdsfgsdfgsdfgsdfgsdsfgsdfgdfgdsg
        </div> */}
      </div>

      <StaticImage
        src={`https://imgproxy.ra.co/_/quality:100/plain/https://static.ra.co/images/profiles/square/rubenganev.jpg?dateUpdated=1568283521000`}
        width={450}
        quality={100}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Ruben Ganev"
        style={{
          borderRadius: "50%",
          margin:  '2.5em 0.5em 5.5em 0.5em'
          // marginBottom: "5.5em",
          // marginTop:  '2.5em'
        }}
      />
    </div>
  </Layout>
)

export default About
