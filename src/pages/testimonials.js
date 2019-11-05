import React from "react"
import { Link, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TestimonialsPage = ({ data }) => {
  const testimonials = data.testimonials.nodes
  const hero = data.hero
  return (
    <Layout>
      <SEO title="Testimonials" />
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
      {testimonials.map(testimonial => (
        <Card key={testimonial.id} style={{ marginTop: 20 }}>
          <Card.Header>{testimonial.stay}</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>{testimonial.content.content}</p>
              <footer className="blockquote-footer">{testimonial.name}</footer>
            </blockquote>
          </Card.Body>
        </Card>
      ))}
      <Link to="/" style={{ border: 0 }}>
        Go back to the homepage
      </Link>
    </Layout>
  )
}

export default TestimonialsPage

export const TestimonialQuery = graphql`
  {
    testimonials: allContentfulTestimonials(limit: 5) {
      nodes {
        id
        name
        stay(formatString: "MMMM YYYY")
        content {
          content
        }
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
