import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PictureLibrary from "../components/picture-library"
import HouseStats from "../components/house-stats"

const IndexPage = ({ data }) => {
  const pictures = data.allContentfulPictureLibrary.edges
  const stats = data.allContentfulHouse.edges
  return (
    <Layout>
      <SEO title="Home" />
      <PictureLibrary pictures={pictures} />
      <HouseStats stats={stats} pictures={pictures} />
    </Layout>
  )
}

export default IndexPage

export const HomeQuery = graphql`
  {
    allContentfulPictureLibrary(
      filter: { heroImage: { eq: true } }
      sort: { fields: sequence, order: ASC }
    ) {
      edges {
        node {
          id
          title
          picture {
            description
            fluid(quality: 99) {
              src
              ...GatsbyContentfulFluid_noBase64
            }
          }
        }
      }
    }
    allContentfulHouse(sort: { fields: id, order: ASC }) {
      edges {
        node {
          id
          title
          statistic
        }
      }
    }
  }
`
