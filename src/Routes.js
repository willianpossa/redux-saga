import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Cart from './Pages/Cart';

const Routes = () => {

    return (
        <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/carrinho" component={ Cart } />
        </Switch>
    );
}

export default Routes;