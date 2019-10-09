export const addToCart = product => ({
    type: 'ADD_TO_CART',
    product
});

export const removeFromCart = product_id => ({
    type: 'REMOVE_FROM_CART',
    product_id
});

export const updateQuantity = (product_id, quantity) => ({
    type: 'UPDATE_QUANTITY_FROM_CART',
    product_id,
    quantity
})