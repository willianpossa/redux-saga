import produce from 'immer';

export default function cart(state = [], action) {
    switch(action.type) {
        case '@cart/ADD_SUCCESS':
            return produce(state, draft => {
                draft.push(action.product);
            });

        case '@cart/REMOVE':
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.product_id);

                if(productIndex >= 0) {
                    draft.splice(productIndex, 1);
                }
            });

        case '@cart/UPDATE_QUANTITY_SUCCESS': {
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