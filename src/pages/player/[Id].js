import * as React from "react"
import Layout from "../../components/Layout/layout"
import Seo from "../../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "../../assets/styles/playerPage.module.scss"
import { playerQuery } from "../../assets/queries/playerQuery"
const Player = (props) => {

  const data = useStaticQuery(graphql`
  query yQuery {
    allPlayerJson {
      edges {
        node {
          MLD006 {
            player
            title
            author
            content
          }
          MLD005 {
            player
            title
            author
            content
          }
          MLD004 {
            player
            title
            author
            content
          }
          MLD003 {
            player
            title
            author
            content
          }
          MLD002 {
            player
            title
            author
            content
          }
          MLD001 {
            player
            title
            author
            content
          }
        }
      }
    }
  }`);

  let [podcastsPlayers, setPodcastsPlayers] = React.useState(null);

  React.useEffect(() => {
    setPodcastsPlayers(data.allPlayerJson.edges[0].node);
  }, [podcastsPlayers]);


  return (
    <Layout>
      <Seo title="Player" />
      <div className={styles.playerWrapper}>
        <div>
          <div></div>
          <div>
            <ol>

            </ol>
          </div>
        </div>
        <div className={styles.playerContainer}>
          {podcastsPlayers && <div dangerouslySetInnerHTML={{ __html: podcastsPlayers[props.Id].player }}></div>}
        </div>
      </div>
    </Layout>
  )
}


export default Player