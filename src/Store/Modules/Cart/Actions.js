export const addToCartRequest = product_id => ({
    type: '@cart/ADD_REQUEST',
    product_id
});

export const addToCartSuccess = product => ({
    type: '@cart/ADD_SUCCESS',
    product
});

export const removeFromCart = product_id => ({
    type: '@cart/REMOVE',
    product_id
});

export const updateQuantityRequest = (product_id, quantity) => ({
    type: '@cart/UPDATE_QUANTITY_REQUEST',
    product_id,
    quantity
})

export const updateQuantitySuccess = (product_id, quantity) => ({
    type: '@cart/UPDATE_QUANTITY_SUCCESS',
    product_id,
    quantity
})