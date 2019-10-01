import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"

const Grid = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  width: 90vw;
`

const ImageItem = styled(Img)`
  height: 75px;
  width: 75px;
  margin: 5px;
`

const PictureGrid = ({ pictures }) => (
  <Grid>
    {pictures.map(({ node }) => (
      <ImageItem key={node.id} fluid={node.picture.fluid} alt={node.title} />
    ))}
  </Grid>
)

export default PictureGrid
