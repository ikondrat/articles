import React, { Component } from 'react'
import { PropTypes } from 'prop-types' 
import { connect } from 'react-redux'
import { 
  fetchArticleIfNeeded
} from '../../actions'
import Article from '../../components/Article'
import Progress from '../../components/Progress'

class ArtilceContainer extends Component {
  componentDidMount() {
    const { dispatch, params} = this.props
    dispatch(
      fetchArticleIfNeeded(params.articleId)
    )
  }

  render() {
    const { articleDetails, isFetching, lastUpdated } = this.props
    return (
      <div>
        <div className="card">
          <div className="card-content">
            {lastUpdated &&
              <h2>Films</h2>
            }
            {isFetching && articleDetails === null &&
              <Progress/>
            }
            {!isFetching && articleDetails === null &&
              <h2>Empty.</h2>
            }
            {articleDetails &&
              <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                <Article 
                  {...articleDetails}
                />
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

ArtilceContainer.propTypes = {
  articleDetails: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    ...state.article
  };
}

export default connect(mapStateToProps)(ArtilceContainer)