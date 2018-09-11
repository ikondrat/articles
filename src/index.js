import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import Article from './pages/Article';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import { Provider } from 'react-redux'
import middleware from './middleware/'
import './style.css';

const store = middleware()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/search" component={Home}/>
        <Route path="/articles/:articleId" component={Article}/>
      </div>
    </Router>
  </Provider>, 
  document.getElementById('root')
);

registerServiceWorker();
