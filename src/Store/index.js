import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import RootReducer from './Modules/RootReducer';
import RootSaga from './Modules/RootSaga';

const sagaMonitor = process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;
const sagaMiddeware = createSagaMiddleware({
    sagaMonitor
});

const enhancer = process.env.NODE_ENV === 'development'
    ? compose(
        console.tron.createEnhancer(),
        applyMiddleware(sagaMiddeware)
    )
    : applyMiddleware(sagaMiddeware);

const Store = createStore(RootReducer, enhancer);

sagaMiddeware.run(RootSaga);

export default Store;