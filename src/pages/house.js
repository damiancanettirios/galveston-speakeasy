import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"

import Layout from "../components/layout"
import SEO from "../components/seo"

const HousePage = ({ data }) => {
  const hero = data.hero
  return (
    <Layout>
      <SEO title="House" />
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
          <Container>
            <h1 style={{ color: `white` }}>
              Amenities of the
              <br />
              Galveston Speakeasy Cottage
            </h1>
          </Container>
        </Jumbotron>
      </BackgroundImage>
      <div style={{ maxWidth: `960px`, margin: `0 auto`, marginBottom: 70 }}>
        <h3
          style={{
            fontWeight: `normal`,
            marginTop: 70,
          }}
        >
          The comfortable two-bedroom house can easily sleep four. The front
          bedroom has a king size bed and its full bathroom attached. The second
          bedroom in the rear of the house has a queen size bed and its own
          bathroom with a shower.
        </h3>
        <h3
          style={{
            fontWeight: `normal`,
            marginTop: 70,
          }}
        >
          The kitchen is fullystocked: coffee bar, wine cooler, gas stove,
          refrigerator with ice maker, dishwasher and a good supply of wine
          glasses, dishes, pots and pans and everything to make a visit to
          Galveston a positive experience.
        </h3>
        <h3
          style={{
            fontWeight: `normal`,
            marginTop: 70,
          }}
        >
          There is a small back deck for quiet conversations, relaxing with
          coffee or drinks in the privacy of the yard.
        </h3>
        <h3
          style={{
            fontWeight: `normal`,
            marginTop: 70,
          }}
        >
          The house has wifi and the Raku television is programmed to accept
          passwords for your Netflix, Hulu, Prime or other streaming services.
          Local stations are available as well.
        </h3>
        <h3
          style={{
            fontWeight: `normal`,
            marginTop: 70,
          }}
        >
          There is a family-style restaurant next door, which is an island
          treasure: Sonny’s Place has been at that location, owned by the
          Puccetti family for more than 75 years. It is open for lunch and later
          for dinner, but closed on Sundays and Mondays.
        </h3>
        <h3
          style={{
            fontWeight: `normal`,
            marginTop: 70,
          }}
        >
          The beach is about eight blocks down 19th Street (there is a
          pedestrian lane if you care to walk) and in the other direction is The
          Strand, Galveston’s downtown with shops, clubs, restaurants and
          galleries.
        </h3>
      </div>
    </Layout>
  )
}

export default HousePage

export const HouseQuery = graphql`
  {
    hero: contentfulAsset(title: { eq: "outside street view" }) {
      title
      fluid(quality: 99) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
`
