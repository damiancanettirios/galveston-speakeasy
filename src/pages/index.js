import React from "react"
import { graphql } from "gatsby"

import Button from "react-bootstrap/Button"
import Carousel from "react-bootstrap/Carousel"
import Container from "react-bootstrap/Container"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PictureLibrary from "../components/picture-library"
import HouseStats from "../components/house-stats"
import Galveston from "../components/galveston"
import TestimonialDisplay from "../components/testimonial-display"

const IndexPage = ({ data }) => {
  const pictures = data.allContentfulPictureLibrary.edges
  const stats = data.allContentfulHouse.edges
  const testimonials = data.testimonials.nodes
  return (
    <Layout>
      <SEO title="Home" />
      <PictureLibrary pictures={pictures} />
      <HouseStats stats={stats} pictures={pictures} />
      <Container style={{ marginBottom: 30, padding: 0 }}>
        <Galveston>
          <Container style={{ padding: 50 }}>
            <h1 style={{ color: `white`, marginBottom: 30 }}>
              See some of the places that make Galveston a fun destination for
              your next trip
            </h1>
            <Button variant="info" size="lg">
              See the Local Amenities
            </Button>
          </Container>
        </Galveston>
      </Container>
      {/* Testimonials */}
      <Container style={{ marginBottom: 60, maxWidth: 960 }}>
        <h1 style={{ marginBottom: 30, textAlign: `center` }}>
          See what our guests have said
        </h1>
        <Carousel>
          {testimonials.map(testimonial => (
            <Carousel.Item key={testimonial.id}>
              <TestimonialDisplay
                testimonial={testimonial}
                body={testimonial.short}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
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
    testimonials: allContentfulTestimonials(
      limit: 5
      sort: { fields: createdAt, order: DESC }
    ) {
      nodes {
        id
        name
        stay(formatString: "MMMM YYYY")
        short
        stars
      }
    }
  }
`
