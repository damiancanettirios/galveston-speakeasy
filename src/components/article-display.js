import React from "react"

import Img from "gatsby-image"

import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const ArticleDisplay = ({ article }) => (
  <Card style={{ margin: `0 auto`, marginBottom: 20 }}>
    <Card.Body>
      <Row>
        <Col xs="3">
          <Img
            key={article.id}
            fluid={article.picture.fluid}
            alt={article.picture.title}
          />
        </Col>
        <Col xs lg="9">
          <a href={article.articleUrl} style={{ border: `none` }}>
            <h3>{article.title}</h3>
          </a>
          <p>{article.description.description}</p>
          <p>
            <a href={article.articleUrl} style={{ border: `none` }}>
              {article.publication}
            </a>
            {" | " + article.date}{" "}
          </p>
        </Col>
      </Row>
    </Card.Body>
  </Card>
)

export default ArticleDisplay
