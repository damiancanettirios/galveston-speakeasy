import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContentPage = ({ data }) => {
  const hero = data.contentfulPages.hero
  const title = data.contentfulPages.title
  const headline = data.contentfulPages.headline
  const body = data.contentfulPages.body
  return (
    <Layout>
      <SEO
        title={title}
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
      <BackgroundImage
        Tag="section"
        fluid={hero.fluid}
        style={{
          width: `100%`,
          backgroundPosition: `center center`,
          backgroundSize: `cover`,
        }}
      >
        <Jumbotron
          style={{
            background: `#34495ebb`,
            paddingTop: 120,
            paddingBottom: 120,
          }}
        >
          <Container style={{ color: `white` }}>
            <MDXRenderer>{headline.childMdx.body}</MDXRenderer>
          </Container>
        </Jumbotron>
      </BackgroundImage>
      <div style={{ maxWidth: `960px`, margin: `0 auto`, marginBottom: 40 }}>
        <MDXRenderer>{body.childMdx.body}</MDXRenderer>
      </div>
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
    </Layout>
  )
}

export default ContentPage

export const ContentQuery = graphql`
  query PageQuery($slug: String!) {
    contentfulPages(slug: { eq: $slug }) {
      title
      slug
      hero {
        fluid {
          ...GatsbyContentfulFluid_noBase64
        }
      }
      headline {
        childMdx {
          body
        }
      }
      body {
        childMdx {
          body
        }
      }
    }
  }
`
