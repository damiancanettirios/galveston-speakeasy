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
  margin: 0 auto;
`

const ListStyle = styled("ul")`
  list-style-type: none;
  text-align: center;
  margin: 0;

  @media (min-width: 701px) {
    text-align: left;
  }
`

const IconLinks = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (min-width: 701px) {
    justify-content: flex-start;
  }
`

const Footer = () => (
  <FooterDiv>
    <Col md={5} sm={6} xs={12} style={{ margin: `0 auto` }}>
      <ListStyle>
        <FooterLi>
          <FooterSiteLink to="/">
            <h4>Galveston Speakeasy Cottage</h4>
          </FooterSiteLink>
        </FooterLi>
        <FooterLi>
          <FooterLink href="https://goo.gl/maps/SgyYLnEM7dQ6ghM78">
            <h4 style={{ fontWeight: `normal` }}>
              1212 19th Street
              <br />
              Galveston, Texas
            </h4>
          </FooterLink>
        </FooterLi>
        <FooterLi style={{ paddingTop: 20 }}>
          <FooterSiteLink to="/contact">
            <h4>Contact Us</h4>
          </FooterSiteLink>
        </FooterLi>
        <FooterLi>
          <IconLinks>
            <FooterLink href="https://www.airbnb.com/rooms/39031320">
              <FontAwesomeIcon icon={faAirbnb} size="lg" />
            </FooterLink>
            <FooterLink href="mailto:info@galvestonspeakeasy.com">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </FooterLink>
          </IconLinks>
        </FooterLi>
      </ListStyle>
    </Col>
    <Col md={2} />
    <Col md={5} sm={6} xs={12}>
      <ListStyle>
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
        {/* <FooterLi>
          <FooterSiteLink to="/media">
            <h4>Media</h4>
          </FooterSiteLink>
        </FooterLi> */}
        <FooterLi>
          <FooterSiteLink to="/local-amenities">
            <h4>Local Amenities</h4>
          </FooterSiteLink>
        </FooterLi>
      </ListStyle>
    </Col>
  </FooterDiv>
)

export default Footer
