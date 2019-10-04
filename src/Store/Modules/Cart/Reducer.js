// import { FormatPrice } from '../../../Utils/Format';
// subtotalFormatted: FormatPrice(price * quantity) 

const initialState = {
    items: []
};

export default function cart(state = initialState, action) {
    switch(action.type) {
        case 'ADD_TO_CART':
            const items = state.items.concat([{
                ...action.product,
                quantity: 1
            }]);

            return {
                ...state,
                items
            }

        default:
            return state;
    }
}