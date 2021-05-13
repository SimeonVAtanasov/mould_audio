import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout.js"
import Seo from "../components/seo"

const Store = () => (
  <Layout>
    <Seo title="Store" />
    <h1>That is going to be the store page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Store
