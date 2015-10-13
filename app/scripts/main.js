import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app';
import StreamViewer from './reducers';


const store = createStore(StreamViewer, { streamdata: [] });
const root = document.getElementById('content');
React.render(
  <Provider store= {store}>{() => <App/>}</Provider>

, root);
