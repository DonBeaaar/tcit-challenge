import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../src/index.css'
import PostsApp from './PostsApp';
import { store } from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <PostsApp />
  </Provider>,
  document.getElementById('root')
);
