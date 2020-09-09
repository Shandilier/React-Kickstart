import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Switch} from 'react-router-dom';
import App from './components/app';
import reducers from './reducers';
import PostIndex from './components/post_index';
import {BrowserRouter,Route} from 'react-router-dom';
import promise from 'redux-promise';
import NewPost from './components/post_new';
import ShowPost from './components/posts_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
      <Switch>
      <Route path= "/post/new" exact component = {NewPost}></Route>
      <Route path = "/post/:id" exact component = {ShowPost}></Route>
      <Route path = "/" exact component = {PostIndex}></Route>
      
      
      </Switch>
    </div>
    
    </BrowserRouter>
    
  </Provider>
  , document.querySelector('.container'));
