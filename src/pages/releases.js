import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "../assets/styles/releasesPage.module.scss"
import { Link } from "gatsby"
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        <h1 className={styles.pageTitle}>Releases</h1>
        <p>Listen your favorite music</p>
      </div>
      <div className={styles.releasesWrapper}>
        {releases.map(release =>
          <div key={release.id} className={styles.releaseContainer} >
            <div className={styles.coverBox}>
              <GatsbyImage
                image={350}
                alt={release.id}
              />

            </div>
            <div className={styles.textBox}>
              <div>
                <h2>
                  {release.name}
                </h2>
                <span>[{release.id}]</span>
                <p>by: {release.by}</p>
              </div>

              <p>
                {release.text}
              </p>
              <Link className={styles.link} to={`/player/${release.id}`}>
                  <span>
                    <FontAwesomeIcon icon={faPlay} size="lg" />
                  </span>
                  <span className={styles.linkText}>Listen</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}


export default Releases