import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Button from "react-bootstrap/Button"
import Carousel from "react-bootstrap/Carousel"
import Container from "react-bootstrap/Container"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HouseStats from "../components/house-stats"
import Galveston from "../components/galveston"
import TestimonialDisplay from "../components/testimonial-display"

const IndexPage = ({ data }) => {
  const pictures = data.heros.images
  const stats = data.stats.edges
  const testimonials = data.testimonials.nodes
  const gallery = data.gallery.images
  return (
    <Layout>
      <SEO title="Home" />
      <Carousel style={{ margin: `0 auto`, width: `95%` }}>
        {pictures.map(image => (
          <Carousel.Item key={image.id} style={{ objectFit: `contain` }}>
            <Img fluid={image.fluid} alt={image.description} />
          </Carousel.Item>
        ))}
      </Carousel>
      <HouseStats stats={stats} gallery={gallery} />
      {/* Testimonials */}
      <Container style={{ marginBottom: 60, marginTop: 60, maxWidth: 960 }}>
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
      {/* Local Amenities */}
      <Container style={{ marginBottom: 60, padding: 0 }}>
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
    </Layout>
  )
}

export default IndexPage

export const HomeQuery = graphql`
  {
    heros: contentfulCasousel(name: { eq: "Hero" }) {
      name
      images {
        id
        description
        fluid(quality: 99) {
          src
          ...GatsbyContentfulFluid_noBase64
        }
      }
    }
    stats: allContentfulHouse(sort: { fields: id, order: ASC }) {
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
    gallery: contentfulCasousel(name: { eq: "Main Casousel" }) {
      name
      images {
        id
        description
        fluid(quality: 99) {
          ...GatsbyContentfulFluid_noBase64
        }
        fixed(height: 500) {
          ...GatsbyContentfulFixed_noBase64
        }
      }
    }
  }
`
