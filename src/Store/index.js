import { createStore } from 'redux';

import RootReducer from './Modules/RootReducer';

const enhancer = process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const Store = createStore(RootReducer, enhancer);

export default Store;