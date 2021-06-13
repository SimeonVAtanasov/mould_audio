import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import * as styles from "../assets/styles/releasesPage.module.scss"

import ReleaseCard from "../components/ReleaseCard/releaseCard.js"

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
              imgBack {
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
        <h1 className={styles.pageTitle}>Releases</h1>
        <p>Listen your favorite music</p>
      </div>
      <div className={styles.releasesWrapper}>
        {releases.map(release =>
          <ReleaseCard key={release.id} release={release} />
        )}
      </div>
    </Layout>
  )
}


export default Releases