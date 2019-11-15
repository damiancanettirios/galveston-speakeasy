import React from "react"
import { graphql } from "gatsby"
import StackGrid from "react-stack-grid"

import Container from "react-bootstrap/Container"

import Card from "react-bootstrap/Card"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GalleryPage = ({ data }) => {
  const pictures = data.pictures.images

  return (
    <Layout>
      <SEO title="Gallery" />
      <Container style={{ paddingBottom: 60, paddingTop: 60 }}>
        <h2 style={{ paddingBottom: 40, textAlign: `center` }}>
          Here is a gallery of photos of the Galveston Speakeasy Cottage
        </h2>
        <StackGrid columnWidth={350}>
          {pictures.map(image => (
            <Card key={image.id}>
              <Card.Img
                variant="top"
                src={image.fixed.src}
                style={{ margin: 0 }}
              />
              <Card.Body style={{ padding: 5 }}>
                <Card.Text>{image.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </StackGrid>
      </Container>
    </Layout>
  )
}

export default GalleryPage

export const GalleryQuery = graphql`
  query {
    pictures: contentfulCasousel(name: { eq: "Main Casousel" }) {
      name
      images {
        id
        description
        fixed(width: 300) {
          src
        }
        fluid(quality: 100) {
          ...GatsbyContentfulFluid_noBase64
        }
      }
    }
  }
`
