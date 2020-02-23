import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Button from "react-bootstrap/Button"
import Carousel from "react-bootstrap/Carousel"
import Container from "react-bootstrap/Container"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HouseStats from "../components/house-stats"
import Galveston from "../components/galveston"
import TestimonialDisplay from "../components/testimonial-display"
import ArticleDisplay from "../components/article-display"

const IndexPage = ({ data }) => {
  const pictures = data.heros.images
  const stats = data.stats.edges
  const testimonials = data.testimonials.nodes
  const gallery = data.gallery.images
  const articles = data.articles.nodes
  return (
    <Layout>
      <SEO
        title="Home"
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
      <Carousel style={{ margin: `0 auto` }}>
        {pictures.map(image => (
          <Carousel.Item key={image.id} style={{ objectFit: `contain` }}>
            <Img fluid={image.fluid} alt={image.description} />
          </Carousel.Item>
        ))}
      </Carousel>
      <HouseStats stats={stats} gallery={gallery} />
      {/* Testimonials */}
      <Container style={{ marginBottom: 30, marginTop: 60, maxWidth: 960 }}>
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
      <div
        style={{
          display: `flex`,
          justifyContent: `center`,
          marginBottom: 60,
          padding: 20,
        }}
      >
        <Button
          variant="outline-danger"
          size="lg"
          href="https://www.airbnb.com/rooms/39031320"
        >
          Book the Galveston Speakeasy Cottage on Airbnb
        </Button>
      </div>
      <hr />
      {/* Articles about Galveston Speakeasy */}
      <Container
        style={{
          margin: `0 auto`,
          marginBottom: 60,
          marginTop: 60,
        }}
      >
        <h1 style={{ marginBottom: 30, textAlign: `center` }}>
          Media articles showcasing this home
        </h1>
        <div style={{ paddingBottom: 20, marginTop: 20 }}>
          {articles.map(article => (
            <ArticleDisplay key={article.id} article={article} />
          ))}
        </div>
        <div
          style={{
            display: `flex`,
            justifyContent: `center`,
          }}
        >
          <Link to="/media" style={{ border: `none` }}>
            <Button variant="outline-primary" size="lg">
              See other articles
            </Button>
          </Link>
        </div>
      </Container>
      {/* Local Amenities */}
      <Container style={{ padding: 0, margin: `0 auto`, marginBottom: 60 }}>
        <Galveston>
          <Container style={{ textAlign: `center` }}>
            <h2 style={{ color: `white`, marginBottom: 30 }}>
              Check out these places on your next trip to Galveston island
            </h2>
            <Link to="/local-amenities">
              <Button variant="primary" size="lg">
                See the Local Amenities
              </Button>
            </Link>
          </Container>
        </Galveston>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const HomeQuery = graphql`
  {
    heros: contentfulGallery(name: { eq: "Hero" }) {
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
    gallery: contentfulGallery(name: { eq: "Main" }) {
      name
      images {
        id
        description
        fluid(quality: 100) {
          ...GatsbyContentfulFluid_noBase64
        }
      }
    }
    articles: allContentfulMedia(
      limit: 2
      sort: { fields: createdAt, order: DESC }
    ) {
      nodes {
        id
        title
        publication
        date
        articleUrl
        picture {
          title
          fluid(quality: 100) {
            ...GatsbyContentfulFluid_noBase64
          }
        }
        description {
          description
        }
      }
    }
  }
`
