import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import Button from "react-bootstrap/Button"

const StatSection = styled("div")`
  padding: 40px 20px 40px 20px;
  width: 95vw;
  margin: 0 auto;

  @media (min-width: 701px) {
    display: flex;
    padding: 40px 0px 40px 0px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`

const StatBox = styled("div")`
  border-top: 1px solid silver;
  border-bottom: 1px solid silver;
  padding: 0px 0px 40px 0px;
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 701px) {
    width: 150px;
  }
`

const Subtitle = styled("h5")`
  font-weight: 400;
  padding: 0;
  text-align: center;
  font-style: italic;
  width: 95%;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
  @media (min-width: 701px) {
    font-weight: 500;
  }
`

const Headline = styled("h3")`
  font-weight: 400;
  margin-top: 20px;
  padding: 0;
  text-align: center;

  @media (min-width: 701px) {
    font-weight: 500;
  }
`

const Stat = styled("h1")`
  font-weight: 600;
  font-size: 3rem;
  margin-top: 0;
`

const GalleryGrid = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  width: 90vw;
  margin: 0 auto;
`

const ImageItem = styled(Img)`
  width: 110px;
  height: 110px;
  margin: 5px;
`

const GalleryImage = styled(Link)`
  &:hover {
    cursor: pointer;
  }
  text-decoration: none;
  border: none;
`

const HouseStats = ({ stats, gallery }) => (
  <StatSection>
    <Headline
      css={css`
        border-bottom: 1px solid #dcdde1;
        padding-bottom: 20px;
      `}
    >
      The Galveston Speakeasy Cottage is a fully-restored historical home in the
      heart of Galveston's historical district now availabile for short-term
      rental on{" "}
      <a
        href="https://www.airbnb.com/rooms/39031320"
        style={{ color: `#fd5c63`, border: 0 }}
      >
        Airbnb
      </a>
    </Headline>
    <div>
      <Subtitle>
        Please see our photo gallery of the Galveston Speakeasy Cottage
      </Subtitle>
      <div style={{ paddingBottom: `20px` }}>
        <GalleryGrid>
          {gallery.map(image => (
            <GalleryImage key={image.id} to="/gallery">
              <ImageItem fluid={image.fluid} alt={image.description} />
            </GalleryImage>
          ))}
        </GalleryGrid>
      </div>
      <div
        style={{
          display: `flex`,
          justifyContent: `center`,
          paddingBottom: 60,
          paddingTop: 40,
        }}
      >
        <Link to="/gallery" style={{ border: `none` }}>
          <Button variant="outline-primary" size="lg">
            Click for More Pictures
          </Button>
        </Link>
      </div>
    </div>
    {stats.map(({ node }) => (
      <StatBox key={node.id}>
        <Headline>{node.title}</Headline>
        <Stat>{node.statistic}</Stat>
      </StatBox>
    ))}
  </StatSection>
)

export default HouseStats
