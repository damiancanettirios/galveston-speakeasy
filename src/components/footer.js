import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import Col from "react-bootstrap/Col"

import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faAirbnb } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const FooterDiv = styled("div")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  background: #34495e;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 50px;
`

const FooterLink = styled("a")`
  color: white;
  text-decoration: none;
  border: 0;
  padding-right: 10px;
`

const FooterSiteLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: normal;
  border: 0px;
`

const FooterLi = styled("li")`
  margin: 0;
`

const Footer = () => (
  <FooterDiv>
    <Col md={5} sm={6} xs={12}>
      <ul style={{ listStyleType: `none` }}>
        <FooterLi>
          <FooterSiteLink to="/">
            <h4>Galveston Speakeasy Cottage</h4>
          </FooterSiteLink>
        </FooterLi>
        <FooterLi>
          <h4 style={{ color: `white`, fontWeight: `normal` }}>
            1212 19th Street, Galveston, Texas
          </h4>
        </FooterLi>
        <FooterLi style={{ paddingTop: 20 }}>
          <FooterSiteLink to="/contact">
            <h4>Contact Us</h4>
          </FooterSiteLink>
        </FooterLi>
        <FooterLi>
          <div style={{ display: `flex` }}>
            <FooterLink href="https://www.airbnb.com/rooms/39031320">
              <FontAwesomeIcon icon={faAirbnb} size="lg" />
            </FooterLink>
            <FooterLink href="mailto:galvestonspeakeasy@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </FooterLink>
          </div>
        </FooterLi>
      </ul>
    </Col>
    <Col md={2} />
    <Col md={5} sm={6} xs={12}>
      <ul style={{ listStyleType: `none` }}>
        <FooterLi>
          <FooterSiteLink to="/history">
            <h4>History</h4>
          </FooterSiteLink>
        </FooterLi>
        <FooterLi>
          <FooterSiteLink to="/house">
            <h4>House</h4>
          </FooterSiteLink>
        </FooterLi>
        <FooterLi>
          <FooterSiteLink to="/testimonials">
            <h4>Testimonials</h4>
          </FooterSiteLink>
        </FooterLi>
        <FooterLi>
          <FooterSiteLink to="/media">
            <h4>Media</h4>
          </FooterSiteLink>
        </FooterLi>
        <FooterLi>
          <FooterSiteLink to="/amenities">
            <h4>Local Amenities</h4>
          </FooterSiteLink>
        </FooterLi>
      </ul>
    </Col>
  </FooterDiv>
)

export default Footer
