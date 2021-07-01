import * as React from "react"
import { Link } from "gatsby"
import * as styles from "../assets/styles/playerPage.module.scss"

import Layout from "../components/Layout/layout.js"
import Seo from "../components/seo"
import TicTacToe from "../components/TicTacToe/TicTacToe.js"

const Store = () => (
  <Layout>
    <Seo title="Store" />



    <div className={styles.playerWrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.titleContainer}>
          <h1>There is no store page yet,  </h1>
          <h3>
            but hey play a Tic-Tac-Toe game
          </h3>
        </div>

          <Link to="/">Go back to the homepage</Link>
      </div>

      <TicTacToe />

    </div>
  </Layout>
)

export default Store
