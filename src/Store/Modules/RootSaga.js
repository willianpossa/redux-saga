import { all } from 'redux-saga/effects';

import Cart from './Cart/Sagas';

export default function* rootSaga() {
    return yield all([
        Cart
    ]);
};