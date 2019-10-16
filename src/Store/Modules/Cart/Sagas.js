import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import API from '../../../Services/Api';
import History from '../../../Services/History';

import { FormatPrice } from '../../../Utils/Format';

import { addToCartSuccess, updateQuantitySuccess } from './Actions';

function* addToCart({ product_id }) {
    const productExists = yield select(
        state => state.cart.find(p => p.id === product_id)
    );

    const stock = yield call(API.get, `/stock/${ product_id }`);

    const stockQuantity = stock.data.amount;
    const currentQuantity = productExists ? productExists.quantity : 0;

    const quantity = currentQuantity + 1;

    if(quantity > stockQuantity) {
        toast.error('Quantidade solicitada fora de estoque');
        return;
    }

    if(productExists) {
        yield put(updateQuantitySuccess(product_id, quantity));
    } else {
        const response = yield call(API.get, `/products/${ product_id }`);

        const data = {
            ...response.data,
            quantity: 1,
            formattedPrice: FormatPrice(response.data.price)
        };

        yield put(addToCartSuccess(data));

        History.push('/cart');
    }
}

function* updateQuantity({ product_id, quantity }) {
    if(quantity <= 0)
        return;

    const stock = yield call(API.get, `/stock/${ product_id }`);
    const stockQuantity = stock.data.amount;

    if(quantity > stockQuantity) {
        toast.error('Quantidade solicitada fora de estoque');
        return;
    }

    yield put(updateQuantitySuccess(product_id, quantity));
}

export default all([
    takeLatest('@cart/ADD_REQUEST', addToCart),
    takeLatest('@cart/UPDATE_QUANTITY_REQUEST', updateQuantity)
]);