import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './Config/ReactotronConfig';

import GlobalStyle from './Styles/global';

import Routes from './Routes';

import Header from './Components/Header';

import Store from './Store/';

import History from './Services/History';

function App() {
    return (
        <Provider store={ Store }>
            <Router history={ History }>
                <Header />
                <Routes />
                <GlobalStyle />
                <ToastContainer 
                    autoClose={ 3000 }
                />
            </Router>
        </Provider>
    );
}

export default App;