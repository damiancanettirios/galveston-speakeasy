import React, { useState } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Img from "gatsby-image"

import Modal from "../components/modal"
import ImageModal from "../components/image-modal"

import CloseButton from "react-bootstrap/CloseButton"

const StatSection = styled("div")`
  padding-top: 20px;
  padding-bottom: 20px;
  width: 95vw;
  margin: 0 auto;

  @media (min-width: 701px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`

const StatBox = styled("div")`
  border-top: 1px solid silver;
  border-bottom: 1px solid silver;
  padding-bottom: 20px;
  margin: 0 auto;
  margin-top: 20px;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Subtitle = styled("h5")`
  font-weight: 400;
  padding: 0;
  text-align: center;
  font-style: italic;
  width: 95%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;

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

const GalleryImage = styled("div")`
  &:hover {
    cursor: pointer;
  }
`

const HouseStats = ({ stats, gallery }) => {
  const [show, setShow] = useState(false)
  const [index, setIndex] = useState(0)

  const handleClose = () => setShow(false)

  function handleShow(selected) {
    setShow(true)
    setIndex(selected)
  }

  return (
    <StatSection>
      <Headline
        css={css`
          border-bottom: 1px solid #dcdde1;
          padding-bottom: 20px;
        `}
      >
        The Galveston Speakeasy Cottage is a fully-restored historical home in
        the heart of Galveston's historical district now availabile for
        short-term rental on{" "}
        <a
          href="https://www.airbnb.com/rooms/39031320"
          style={{ color: `#fd5c63`, border: 0 }}
        >
          Airbnb
        </a>
      </Headline>
      <Subtitle>
        Click below to view more photos of the Galveston Speakeasy Cottage
      </Subtitle>
      <div style={{ paddingBottom: `20px` }}>
        <GalleryGrid>
          {gallery.map((image, index) => (
            <GalleryImage key={image.id} onClick={() => handleShow(index)}>
              <ImageItem fluid={image.fluid} alt={image.description} />
            </GalleryImage>
          ))}
        </GalleryGrid>
        {show ? (
          <Modal handleClose={handleClose}>
            <CloseButton
              onClick={() => handleClose()}
              style={{ textAlign: `right`, padding: 10, color: `white` }}
            />
            <div style={{ marginTop: 60 }}>
              <ImageModal gallery={gallery} selected={index} />
            </div>
          </Modal>
        ) : null}
      </div>
      {stats.map(({ node }) => (
        <StatBox key={node.id}>
          <Headline>{node.title}</Headline>
          <Stat>{node.statistic}</Stat>
        </StatBox>
      ))}
    </StatSection>
  )
}

export default HouseStats
