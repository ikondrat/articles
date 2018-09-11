import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchArticles,
  fetchMore,
} from '../../actions'
import Articles from '../../components/Articles'

class ArticlesContainer extends Component {
  componentWillMount() {
    this.props.fetchArticles();
  }
  render() {
    return (<Articles {...this.props}/>)
  }
}

const bindActionsToDispatch = dispatch => ({
    fetchArticles : (x) => {dispatch(fetchArticles(x))},
    fetchMore: (params) => {dispatch(fetchMore(params))}
});

const mapStateToProps = (s) => {
  return s.articles;
}

export default connect(mapStateToProps, bindActionsToDispatch)(ArticlesContainer)