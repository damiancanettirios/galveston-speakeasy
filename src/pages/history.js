import React from "react"
import { Link, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"

import Layout from "../components/layout"
import SEO from "../components/seo"

const HistoryPage = ({ data }) => {
  const hero = data.hero
  return (
    <Layout>
      <SEO title="History" />
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
              Brief History of
              <br />
              Galveston and the
              <br />
              Galveston Speakeasy Cottage
            </h1>
          </Container>
        </Jumbotron>
      </BackgroundImage>
      <div style={{ maxWidth: `960px`, margin: `0 auto` }}>
        <h3
          style={{
            fontWeight: `normal`,
            marginTop: 70,
          }}
        >
          Galveston Island is a 32-mile-long barrier island in the Gulf of
          Mexico protecting the Texas coast and offering unlimited activities
          for visitors and residents.
        </h3>
        <h3
          style={{
            fontWeight: `normal`,
            marginTop: 70,
          }}
        >
          Galveston’s rich history, dating back hundreds of years and once the
          largest and perhaps most important Texas city in the 19th century, was
          considered the “Wall Street of the South” because it was the financial
          and commercial center for the state. Many of the opulent Victorian
          homes which were built to last remain standing in one of the largest
          col lection of pre-20th century homes in the country.
        </h3>
        <h3
          style={{
            fontWeight: `normal`,
            marginTop: 70,
          }}
        >
          This house, the Galveston Speakeasy cottage, was built in 1890 as a
          tenant house or rental property for local workers at the port.
          Originally it was a one-bedroom home, but in the restoration process,
          it was converted to a two-bedroom, two-bath house, with a comfortable
          living room, modern kitchen and small dining room. What makes this
          house so inviting are the walls. Original shiplap wood, collected from
          the city’s stockpile of recycled materials in the 1800s, has been
          refinished and restored. The many original colors and styles,
          reminiscent of conceivably a dozen or more demolished houses, line the
          walls of the bedrooms, living room and kitchen. Even the ceilings have
          been restored to their original beauty.
        </h3>
        <h3
          style={{
            fontWeight: `normal`,
            marginTop: 70,
          }}
        >
          Interior doors, with the transoms atop for better air circulation
          before air conditioning was invented, have all be restored and are
          part of the house’s history. The oak floors are also original to the
          house and have been refinished in their natural color.
        </h3>
        <h3
          style={{
            fontWeight: `normal`,
            marginTop: 70,
          }}
        >
          The front door also is part of the house’s history – with its cute
          little peek-a-boo door, thus the name of this house is the Galveston
          Speakeasy. However, you don’t need a secret password to enter.
        </h3>
      </div>
      <Link to="/" style={{ border: 0 }}>
        Go back to the homepage
      </Link>
    </Layout>
  )
}

export default HistoryPage

export const HistoryQuery = graphql`
  {
    hero: contentfulAsset(title: { eq: "Historical Galveston" }) {
      title
      fluid(quality: 99) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
`
