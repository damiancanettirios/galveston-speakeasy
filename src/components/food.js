import React from "react"
import { Card } from "react-rainbow-components"

const Food = ({ places }) => {
  return (
    <section>
      {places.map(({ node }) => (
        <Card
          key={node.id}
          footer={
            <div style={{ color: `black`, textAlign: `left` }}>
              <h3 style={{ color: `black`, margin: 0, padding: 0 }}>
                {node.title}
              </h3>
              <a style={{ color: `black` }} href={node.googleMapsUrl}>
                {node.address}
              </a>
              <p style={{ padding: 0, margin: 0 }}>{node.shortDescript}</p>
            </div>
          }
          style={{ marginTop: 30 }}
        >
          <img
            src={node.picture.fluid.src}
            alt={node.title}
            style={{ margin: 0 }}
          />
        </Card>
      ))}
    </section>
  )
}

export default Food
