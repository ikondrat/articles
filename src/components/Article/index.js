import React from 'react';
import {Card, CardContent} from '@material-ui/core';
import PropTypes from 'prop-types';
import {
  Link
} from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Divider
} from '@material-ui/core';
import styled from 'styled-components';
import {
  Progress
} from '../../components';

const StyledBar = styled(AppBar)`
  && {
    position: relative;
    a {
      color: white;
    }
  }
`;

const Article = ({
  title,
  url,
  isFetching
}) => (
  <div>
    <StyledBar>
        <Toolbar>
            <Link to="/">Go back</Link>
        </Toolbar>
    </StyledBar>
    <Divider/>
    {isFetching &&
      <Progress/>
    }
    {!isFetching &&
      <Card>
        <CardContent>
          <h1>{title}</h1>
          <a href={url}>{url}</a>
        </CardContent>
      </Card>
    }
  </div>
);

Article.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  isFetching: PropTypes.bool
};


export default Article;