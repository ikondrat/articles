import React from 'react';
import {Card, CardText} from 'material-ui/Card';
import PropTypes from 'prop-types';

const Article = ({
  title
}) => (
  <Card>
    <CardText>
      {title}
    </CardText>
  </Card>
);


Article.propTypes = {
  title: PropTypes.string.isRequired
};


export default Article;