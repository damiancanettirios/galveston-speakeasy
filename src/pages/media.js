import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MediaPage = () => (
  <Layout>
    <SEO
      title="Media"
      keywords={[
        `Galveston`,
        `vacation homes`,
        `galveston vacation homes`,
        `galveston rentals`,
        `galveston airbnbs`,
        `galveston airbnb`,
        `places to rent in galveston`,
        `galveston speakeasy`,
        `galveston speakeasy cottage`,
      ]}
    />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/" style={{ border: 0 }}>
      Go back to the homepage
    </Link>
  </Layout>
)

export default MediaPage
