import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import PictureGrid from "../components/picture-grid"

const StatSection = styled("div")`
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
`

const StatBox = styled("div")`
  border-top: 1px solid silver;
  border-bottom: 1px solid silver;
  padding-bottom: 20px;
  margin-top: 20px;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Headline = styled("h3")`
  font-weight: 400;
  margin-top: 20px;
`

const Stat = styled("h1")`
  font-weight: 600;
  font-size: 3rem;
  margin-top: 0;
`

const HouseStats = ({ stats, pictures }) => (
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
    <h5>Click below to view more photos of the Galveston Speakeasy Cottage</h5>
    <div style={{ paddingBottom: `20px` }}>
      <PictureGrid pictures={pictures} />
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
