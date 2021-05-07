import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "../assets/styles/radioPage.module.scss"

const Radio = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
      allPodcastsJson {
        edges {
          node {
            id
            img {
              childImageSharp {
                gatsbyImageData
              }
            }
            text
            extension
          }
        }
      }
    }`
    );

    let [podcasts, setPodcasts] = React.useState([]);

    React.useEffect(() => {
        let arr = [];
        data.allPodcastsJson.edges.map(podcast => arr.push(podcast.node));
        setPodcasts(arr);
    }, [data]);


    return (
        <Layout>
            <Seo title="Radio" />
            <div className={styles.pageTitleContainer}>
                <h1 className={styles.pageTitle}>Releases</h1>
                <p>Listen your favorite releases</p>
            </div>
            <div className={styles.podcastsWrapper}>
                {podcasts.map(podcast =>
                    <div key={podcast.id} className={styles.podcastCoverImg} >
                        <GatsbyImage
                            image={podcast.img.childImageSharp.gatsbyImageData}
                            width={350}
                            alt={podcast.text}
                            className={"#"}
                        />
                        <div className={styles.coverText}>
                            <p>Click here to listen</p>
                            <p>{podcast.text}</p>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    )
}


export default Radio