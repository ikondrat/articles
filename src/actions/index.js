import fetch from 'isomorphic-fetch'

export const REQUEST_ARTICLE = 'REQUEST_ARTICLE'
export const REQUEST_ARTICLES = 'REQUEST_ARTICLES'
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES'
export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE'
export const TOGGLE_ARTICLE= 'TOGGLE_ARTICLE'
export const INVALIDATE_ARTICLE= 'INVALIDATE_ARTICLE'

export const REQUEST_PAGE = 'REQUEST_PAGE'
export const RECIEVE_PAGE = 'RECIEVE_PAGE'

const apiURL = 'https://hn.algolia.com/api/v1';

function requestArticles() {
  return {
    type: REQUEST_ARTICLES
  }
}

function requestPage() {
  return {
    type: REQUEST_PAGE
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

function receivePage(articles, prevList) {
  return {
    type: RECIEVE_PAGE,
    articles: [...prevList, ...articles.hits],
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

export function fetchArticles(params=null) {
  return dispatch => {
    dispatch(requestArticles())
    let query = `${apiURL}/search`;
    if (params != null) {
      Object.keys(params).forEach((key, i) => {
        query += i > 0 ? '&' : '?';
        query += `${key}=${params[key]}`;
      })
    }
    return fetch(query)
      .then((response, data) => {
        return response.json()
      })
      .then(json => dispatch(receiveArticles(json)))
  }
}

export function fetchMore(params={page: 0}) {

  return (dispatch, getState) => {
    dispatch(requestPage())
    let query = `${apiURL}/search`;
    params.page += 1; 
    Object.keys(params).forEach((key, i) => {
      query += i > 0 ? '&' : '?';
      query += `${key}=${params[key]}`;
    });
    const { articles } = getState();
    return fetch(query)
      .then((response, data) => {
        return response.json()
      })
      .then(json => dispatch(receivePage(json, articles.list)))
  }
}

export function fetchArticle(articleId) {
  return dispatch => {
    dispatch(requestArticle(articleId))
    return fetch(`${apiURL}/items/${articleId}`)
      .then(response => {
        return response.json();
      })
      .then(json => dispatch(receiveArtice(articleId, json)))
  }
}