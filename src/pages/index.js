import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PictureLibrary from "../components/picture-library"
import PictureGrid from "../components/picture-grid"

const IndexPage = ({ data }) => {
  const pictures = data.allContentfulPictureLibrary.edges
  return (
    <Layout>
      <SEO title="Home" />
      <PictureLibrary pictures={pictures} />
      <PictureGrid pictures={pictures} />
    </Layout>
  )
}

export default IndexPage

export const HomeQuery = graphql`
  {
    allContentfulPictureLibrary(sort: { fields: [id], order: DESC }) {
      edges {
        node {
          id
          title
          picture {
            description
            fluid(quality: 99) {
              src
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
