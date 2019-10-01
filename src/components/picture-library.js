import React from "react"
import { CarouselImage } from "react-rainbow-components"
import { CarouselCard } from "react-rainbow-components"

const PictureLibrary = ({ pictures }) => {
  const carouselContainerStyles = {
    width: `90vw`,
  }

  return (
    <div className="rainbow-p-bottom_small">
      <CarouselCard className="rainbow-m_auto" style={carouselContainerStyles}>
        {pictures.map(({ node }) => (
          <CarouselImage
            key={node.id}
            alternativeText={node.picture.description}
            src={node.picture.fluid.src}
          ></CarouselImage>
        ))}
      </CarouselCard>
    </div>
  )
}

export default PictureLibrary
