import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Home from './containers/Home';
import store from './store';

export default () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <App>
            <Route exact path="/" component={Home}></Route>
          </App>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}
