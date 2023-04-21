import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import {Provider} from 'react-redux'
import { store } from 'redux/store';
import { GlobalStyle } from 'GlobalStyled/GlobalStyles';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    <GlobalStyle />
    </Provider>
  </React.StrictMode>
);
