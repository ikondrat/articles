import React from 'react';
import {Card, CardText} from 'material-ui/Card';
import {
  Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    overflowY: 'auto',
  },
};

const List = ({items, toggleSelectedState}) => (
  <div style={styles}>
    <ul>
      {items.map(({objectID, title}, i) => (
        <Card key={i}>
          <CardText>
            <Link  to={`/articles/${objectID}`}>
              {title}
            </Link>
          </CardText>
        </Card>
      ))}
    </ul>
  </div>
)
List.propTypes = {
  items: PropTypes.array.isRequired
};

export default List;