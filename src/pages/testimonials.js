import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TestimonialDisplay from "../components/testimonial-display"

const TestimonialsPage = ({ data }) => {
  const testimonials = data.testimonials.nodes
  const hero = data.hero
  return (
    <Layout>
      <SEO
        title="Testimonials"
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
      />{" "}
      />
      <BackgroundImage Tag="section" fluid={hero.fluid}>
        <Jumbotron
          style={{
            background: `#34495ebb`,
            paddingTop: 120,
            paddingBottom: 120,
          }}
        >
          <Container>
            <h1 style={{ color: `white` }}>
              Testimonials from
              <br />
              Recent Guests
            </h1>
          </Container>
        </Jumbotron>
      </BackgroundImage>
      <Container style={{ paddingBottom: 40, marginTop: 30, maxWidth: 960 }}>
        {testimonials.map(testimonial => (
          <TestimonialDisplay
            key={testimonial.id}
            testimonial={testimonial}
            body={testimonial.content.content}
          />
        ))}
      </Container>
    </Layout>
  )
}

export default TestimonialsPage

export const TestimonialQuery = graphql`
  {
    testimonials: allContentfulTestimonials(
      limit: 5
      sort: { fields: createdAt, order: DESC }
    ) {
      nodes {
        id
        name
        stay(formatString: "MMMM YYYY")
        content {
          content
        }
        stars
      }
    }
    hero: contentfulAsset(title: { eq: "LivingRoomClear" }) {
      title
      fluid(quality: 99) {
        ...GatsbyContentfulFluid_noBase64
      }
    }
  }
`
