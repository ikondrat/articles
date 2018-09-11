import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  fetchArticle
} from '../../actions'
import Article from '../../components/Article'

class ArtilceContainer extends Component {
  componentWillMount() {
    this.props.fetchArticle(this.props.match.params.articleId)
  }
  render() {
    return (<Article {...this.props}/>)
  }
}

function mapStateToProps(state) {
  return {
    ...state.article.articleDetails,
    isFetching: state.article.isFetching
  };
}

const bindActionsToDispatch = dispatch => ({
  fetchArticle : (x) => {dispatch(fetchArticle(x))}
});

export default connect(mapStateToProps, bindActionsToDispatch)(ArtilceContainer)