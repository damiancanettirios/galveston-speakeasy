import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Places from "../components/food"

const LocalAmenitiesPage = ({ data }) => {
  const food = data.food.edges
  const entertainment = data.entertainment.edges
  return (
    <Layout>
      <SEO title="Local Amenities" />
      <h1>Local Amenities in Galveston</h1>
      <h2 style={{ marginTop: 20 }}>Food</h2>
      <Places places={food} />
      <h2 style={{ marginTop: 20 }}>Entertainment</h2>
      <Places places={entertainment} />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default LocalAmenitiesPage

export const LocalQuery = graphql`
  {
    food: allContentfulLocalAmenities(filter: { type: { eq: "Food" } }) {
      edges {
        node {
          title
          id
          shortDescript
          address
          googleMapsUrl
          type
          picture {
            title
            fluid(quality: 99) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
    entertainment: allContentfulLocalAmenities(
      filter: { type: { eq: "Entertainment" } }
    ) {
      edges {
        node {
          title
          id
          shortDescript
          address
          googleMapsUrl
          type
          picture {
            title
            fluid(quality: 99) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
