import React from 'react';
import {Card, CardText} from 'material-ui/Card';
import PropTypes from 'prop-types';

const Article = ({
  title,
  url
}) => (
  <Card>
    <CardText>
      <h1>{title}</h1>
      <a href={url}>{url}</a>
    </CardText>
  </Card>
);


Article.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};


export default Article;