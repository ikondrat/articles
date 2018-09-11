import fetch from 'isomorphic-fetch'

export const REQUEST_ARTICLE = 'REQUEST_ARTICLE'
export const REQUEST_ARTICLES = 'REQUEST_ARTICLES'
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES'
export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE'
export const TOGGLE_ARTICLE= 'TOGGLE_ARTICLE'
export const INVALIDATE_ARTICLE= 'INVALIDATE_ARTICLE'

const apiURL = 'https://hn.algolia.com/api/v1/';

function requestArticles() {
  return {
    type: REQUEST_ARTICLES
  }
}

function requestArticle(article) {
  return {
    type: REQUEST_ARTICLE,
    article
  }
}

function receiveArticles(articles) {
  return {
    type: RECEIVE_ARTICLES,
    articles: articles.hits,
    page: articles.page,
    pages: articles.nbPages,
    receivedAt: Date.now()
  }
}

function receiveArtice(articleId, json) {
  return {
    type: RECEIVE_ARTICLE,
    articleId: articleId,
    article: json,
    receivedAt: Date.now()
  }
}

function fetchArticles(q="") {
  return dispatch => {
    dispatch(requestArticles())
    const query = q.length > 0 ? `${apiURL}/search?query=${q}` : `${apiURL}/search`;
    return fetch(query)
      .then((response, data) => {
        return response.json()
      })
      .then(json => dispatch(receiveArticles(json)))
  }
}

function fetchArticle(articleId) {
  return dispatch => {
    dispatch(requestArticle(articleId))
    return fetch(`${apiURL}/items/${articleId}`)
      .then(response => {
        return response.json();
      })
      .then(json => dispatch(receiveArtice(articleId, json)))
  }
}

function shouldfetchArticles(state) {
  return state.articles && state.articles.length > 9 ? false : true;
}

export function fetchArticleIfNeeded(articleId) {
  return (dispatch, getState) => {
    return dispatch(fetchArticle(articleId))
  }
}


export function fetchArticlesIfNeeded() {
  return (dispatch, getState) => {
    const state = getState();
    if (shouldfetchArticles(state)) {
      return dispatch(fetchArticles())
    } else {
      return dispatch(receiveArticles(state.articles))
    }
  }
}

export function fetchNextPage(currentPage) {
  alert('fetch next page here');
}

export function fetchArticlesByText(q) {
  return (dispatch, getState) => {
    return dispatch(fetchArticles(q))
  }
}