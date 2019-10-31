import React, { Component } from 'react';
import Routing from './app/RoutingPage';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import loginreducer from "./app/loginPage/loginreducer"

const store = createStore(loginreducer)
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routing />
      </Provider>
    );
  }
}
