import React from "react"
import Carousel from "react-bootstrap/Carousel"
import Img from "gatsby-image"

const PictureLibrary = ({ pictures }) => {
  return (
    <Carousel style={{ margin: `0 auto` }}>
      {pictures.map(({ node }) => (
        <Carousel.Item key={node.id} style={{ objectFit: `contain` }}>
          <Img fluid={node.picture.fluid} alt={node.picture.description} />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default PictureLibrary
