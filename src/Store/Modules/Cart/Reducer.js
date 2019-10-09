import produce from 'immer';

export default function cart(state = [], action) {
    switch(action.type) {
        case 'ADD_TO_CART':
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.product.id);

                if(productIndex >= 0) {
                    draft[productIndex].quantity += 1;
                } else {
                    draft.push({
                        ...action.product,
                        quantity: 1
                    });
                }
            });

        case 'REMOVE_FROM_CART':
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.product_id);

                if(productIndex >= 0) {
                    draft.splice(productIndex, 1);
                }
            });

        case 'UPDATE_QUANTITY_FROM_CART': {
            if(action.quantity <= 0) {
                return state;
            }

            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.product_id);

                if(productIndex >= 0) {
                    draft[productIndex].quantity = parseInt(action.quantity);
                }
            });
        }

        default:
            return state;
    }
}