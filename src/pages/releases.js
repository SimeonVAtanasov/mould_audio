import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "../assets/styles/releasesPage.module.scss"

const Releases = () => {
    const data = useStaticQuery(graphql`
    query MQuery {
        allReleasesJson {
          edges {
            node {
              by
              id
              img {
                childImageSharp {
                  gatsbyImageData
                }
              }
              name
              text
            }
          }
        }
      }`
    );

    let [releases, setReleases] = React.useState([]);

    React.useEffect(() => {
        let arr = [];
        data.allReleasesJson.edges.map(release => arr.push(release.node));
        setReleases(arr);
    }, [data]);


    return (
        <Layout>
            <Seo title="Releases" />
            <div className={styles.pageTitleContainer}>
                <h1 className={styles.pageTitle}>Radio</h1>
                <p>Listen your favorite podcasts</p>
            </div>
            <div className={styles.podcastsWrapper}>
                {releases.map(release =>
                    <div key={release.id} className={styles.podcastCoverImg} >
                        <GatsbyImage
                            image={release.img.childImageSharp.gatsbyImageData}
                            width={350}
                            alt={release.id}
                            className={"#"}
                        />
                    </div>
                )}
            </div>
        </Layout>
    )
}


export default Releases