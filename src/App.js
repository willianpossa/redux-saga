import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './Config/ReactotronConfig';

import GlobalStyle from './Styles/global';

import Routes from './Routes';

import Header from './Components/Header';

import Store from './Store/';

function App() {
    return (
        <Provider store={ Store }>
            <BrowserRouter>
                <Header />
                <Routes />
                <GlobalStyle />
            </BrowserRouter>
        </Provider>
    );
}

export default App;