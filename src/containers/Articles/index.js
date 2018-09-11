import React, { Component } from 'react'
import { PropTypes } from 'prop-types' 
import { connect } from 'react-redux'
import { 
  fetchArticlesIfNeeded,
  fetchArticlesByText,
  fetchNextPage
} from '../../actions'
import TextField from 'material-ui/TextField'
import List from '../../components/List'
import Progress from '../../components/Progress'

class Articles extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.fetchNextPage = this.fetchNextPage.bind(this);
  }
  componentWillMount() {
    const { dispatch } = this.props
    dispatch(
      fetchArticlesIfNeeded()
    )
  }

  fetchNextPage() {
    this.props.dispatch(
      fetchNextPage(this.props.page)
    );
  }

  handleChange(e, v) {
    this.props.dispatch(
      fetchArticlesByText(v)
    );
  }

  render() {
    const { list, isFetching, lastUpdated, pages, page } = this.props
    return (
      <div>
        <TextField
          id="name"
          placeholder="Search the article"
          onChange={this.handleChange}
          margin="normal"
        />
        <div className="card">
          <div className="card-content">
          {lastUpdated &&
            <h2>Articles</h2>
          }
        {isFetching && list.length === 0 &&
          <Progress/>
        }
        {!isFetching && list.length === 0 &&
          <h2>Empty.</h2>
        }
        {list.length > 0 &&
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <List 
              items={list}
            />
          </div>
        }
          </div>
        </div>
        {pages < page &&
          <button onClick={this.fetchNextPage}>load more</button>
        }
        Pages: {pages}, Page: {page}
      </div>
    )
  }
}

Articles.propTypes = {
  list: PropTypes.array.isRequired,
  pages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

export default connect(s => {
  return {
    ...s.articles
  }
})(Articles)