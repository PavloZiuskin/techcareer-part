import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import  "./index.css"
import  App  from 'components/App';
import { GlobalStyle } from 'GlobalStyled/GlobalStyles';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/techcareer-part">
    <App />
    <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
);
