import * as React from "react"
import Layout from "../../components/Layout/layout"
import Seo from "../../components/seo"
import * as styles from "../../assets/styles/playerPage.module.scss"
import { useAllReleases } from "../../assets/queries/useAllReleases"
const Player = (props) => {
  const data = useAllReleases()

  let [players, setPlayers] = React.useState(null);

  React.useEffect(() => {
    setPlayers(data.allPlayerJson.edges[0].node);
  }, [players]);


  return (
    <Layout>
      <Seo title="Player" />
      <div className={styles.playerWrapper}>
        <div className={styles.contentWrapper}>
          <div className={styles.titleContainer}>
            <h1>
              {players && players[props.Id].title}
            </h1>
            <p>
              {players && players[props.Id].author}
            </p>
          </div>

          <div className={styles.contentContainer}>
            <ol>
              {players && players[props.Id].content.map((record) => <li>{record}</li>)}
            </ol>
          </div>
        </div>

        <div className={styles.playerContainer}>
          {players && <div dangerouslySetInnerHTML={{ __html: players[props.Id].player }}></div>}
        </div>
      </div>
    </Layout>
  )
}


export default Player