import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import { Button } from "react-rainbow-components"

import PageLink from "../components/page-link"
import PageList from "../components/page-list"

const Header = ({ siteData }) => {
  const [active, setActive] = useState(false)

  return (
    <header
      style={{
        background: `transparent`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          width: `95%`,
          padding: `0.5rem 1rem`,
        }}
      >
        <h3 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              textDecoration: `none`,
              color: `white`,
            }}
          >
            {siteData.headline}
          </Link>
        </h3>
        <p style={{ marginBottom: 10, marginTop: 0 }}>{siteData.address}</p>
        <Button
          onClick={() => setActive(!active)}
          variant="brand"
          style={{ borderRadius: `5px` }}
        >
          Menu {!active ? "+" : "x"}
        </Button>
        {!active ? null : (
          <PageList>
            <PageLink page={`/`}>Home</PageLink>
            <PageLink page={`/history`}>History</PageLink>
            <PageLink page={`/house`}>House</PageLink>
            <PageLink page={`/testimonials`}>Testimonials</PageLink>
            <PageLink page={`/media`}>Media</PageLink>
            <PageLink page={`/local-amenities`}>Local Amenities</PageLink>
            <PageLink page={`/contact`}>Contact</PageLink>
          </PageList>
        )}
      </div>
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
