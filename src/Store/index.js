import { createStore } from 'redux';

import RootReducer from './Modules/RootReducer';

const Store = createStore(RootReducer);

export default Store;