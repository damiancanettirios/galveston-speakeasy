import React from "react"
import styled from "@emotion/styled"

const StatBox = styled("div")`
  border-top: 1px solid #718093;
  border-bottom: 1px solid #718093;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Headline = styled("h3")`
  font-weight: 400;
  font-size: 1.25rem;
  margin-bottom: 20px;
  margin-top: 20px;
`

const Stat = styled("h1")`
  font-weight: 600;
  font-size: 3rem;
  margin-top: 0;
`

const HouseStats = ({ stats }) => (
  <section>
    <Headline>
      The Galveston Speakeasy is a restored historical home for short-term
      rental in the heart of Galveston's historical district
    </Headline>
    {stats.map(({ node }) => (
      <StatBox key={node.id}>
        <Headline>{node.title}</Headline>
        <Stat>{node.statistic}</Stat>
      </StatBox>
    ))}
  </section>
)

export default HouseStats
