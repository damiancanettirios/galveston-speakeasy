import React from "react"

import Card from "react-bootstrap/Card"

const ArticleDisplay = ({ article }) => (
  <Card style={{ margin: `0 auto`, marginBottom: 20 }}>
    <Card.Body>
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
    </Card.Body>
  </Card>
)

export default ArticleDisplay
