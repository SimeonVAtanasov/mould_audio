import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "../assets/styles/radioPage.module.scss"
import { Link } from "gatsby"

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
                <p className={styles.pageTitle}>Listen your favorite podcasts</p>
            </div>
            <div className={styles.podcastsWrapper}>
                {podcasts.map(podcast =>
                    <div key={podcast.id} className={styles.podcastCoverImg} >
                        <GatsbyImage
                            image={podcast.img.childImageSharp.gatsbyImageData}
                            width={250}
                            alt={podcast.text}
                        />
                        <Link to={`/player/${podcast.id}`} className={styles.coverText}>
                            <p>Click here to listen</p>
                            <p>{podcast.text}</p>
                        </Link>
                    </div>
                )}
            </div>
        </Layout>
    )
}


export default Radio