import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import CloseButton from "react-bootstrap/CloseButton"

import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = ({ siteData }) => {
  const [active, setActive] = useState(false)

  return (
    <header
      style={{
        background: `transparent`,
        margin: `0 auto`,
        width: `95%`,
      }}
    >
      <Navbar style={{ padding: `10px 0px 0px 0px` }}>
        <div
          style={{
            display: `flex`,
            flexDirection: `row`,
            justifyContent: `space-between`,
            width: `100%`,
          }}
        >
          <div>
            <h5 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  textDecoration: `none`,
                  color: `black`,
                  border: `0px`,
                }}
              >
                {siteData.headline}
              </Link>
            </h5>
            <p style={{ marginBottom: 5 }}>{siteData.address}</p>
          </div>
          <div style={{ padding: 4 }}>
            {!active ? (
              <FontAwesomeIcon
                icon={faBars}
                onClick={() => setActive(!active)}
                style={{ color: `black` }}
              />
            ) : (
              <CloseButton onClick={() => setActive(!active)} />
            )}
          </div>
        </div>
      </Navbar>
      {!active ? null : (
        <Nav defaultActiveKey="/" className="flex-column">
          <Nav.Link href={`/`} style={{ paddingLeft: 0 }}>
            Home
          </Nav.Link>
          <Nav.Link href={`/history`} style={{ paddingLeft: 0 }}>
            History
          </Nav.Link>
          <Nav.Link href={`/house`} style={{ paddingLeft: 0 }}>
            House
          </Nav.Link>
          <Nav.Link href={`/testimonials`} style={{ paddingLeft: 0 }}>
            Testimonials
          </Nav.Link>
          <Nav.Link href={`/media`} style={{ paddingLeft: 0 }}>
            Media
          </Nav.Link>
          <Nav.Link href={`/local-amenities`} style={{ paddingLeft: 0 }}>
            Local Amenities
          </Nav.Link>
          <Nav.Link href={`/contact`} style={{ paddingLeft: 0 }}>
            Contact
          </Nav.Link>
        </Nav>
      )}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
