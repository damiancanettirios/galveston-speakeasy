import React from "react"
import { graphql } from "gatsby"

import Container from "react-bootstrap/Container"
import Jumbotron from "react-bootstrap/Jumbotron"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleDisplay from "../components/article-display"

const MediaPage = ({ data }) => {
  const articles = data.articles.nodes
  const hero = data.hero
  return (
    <Layout>
      <SEO
        title="Media"
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
              Articles about the
              <br />
              Galveston Speakeasy Cottage
            </h1>
          </Container>
        </Jumbotron>
      </BackgroundImage>
      <Container style={{ paddingBottom: 40, marginTop: 30 }}>
        {articles.map(article => (
          <ArticleDisplay key={article.id} article={article} />
        ))}
      </Container>
    </Layout>
  )
}

export default MediaPage

export const MediaQuery = graphql`
  query {
    articles: allContentfulMedia {
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
    hero: contentfulAsset(title: { eq: "KingBedroomDresser" }) {
      title
      fluid(quality: 99) {
        ...GatsbyContentfulFluid_noBase64
      }
    }
  }
`
