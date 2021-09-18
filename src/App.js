import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import Routes from './confg/routes';
import { BrowserRouter } from 'react-router-dom';

function App(props) {
  return (
    <Provider store={props.store}>
      {
        props.location ?
        (
          <StaticRouter location={props.location} context={{}}>
            <Routes store={props.store}/>
          </StaticRouter>
        ) : (
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        )
      }
    </Provider>
  );
}

export default App;
