import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// in order to use react with redux, we need react-redux.
import { Provider } from 'react-redux'; 
// create a redux store, so that:
// redux exists
// the provider has that store
import { createStore } from 'redux';

// reducers to populate the store
// reducers go into the rootReducer
// Make individual reducers to go into the rootReducer
import rootReducer from './reducers/rootReducers';

// actually create the store by passing the rootReducer 
// which is made up of the individual reducers

const thePublix = createStore(rootReducer);

// provider is the component that glues react and redux together
// we hand the provider to ReactDOM.render
// and we hand the prodiver a prop of store with out store

ReactDOM.render(<Provider store={thePublix}><App /></Provider>, document.getElementById('root'));
