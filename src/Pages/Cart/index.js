import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { Container, ProductTable, Footer, Total } from './styles';

import * as CartActions from '../../Store/Modules/Cart/Actions';

import { FormatPrice } from '../../Utils/Format';

const Cart = () => {
    const cart = useSelector(
        state => state.cart.map(item => ({
            ...item,
            subtotal: FormatPrice(item.price * item.quantity)
        }))
    );
    const totalCart = useSelector(
        state => FormatPrice(state.cart.reduce((total, product) => {
            return total + product.price * product.quantity
        }, 0))
    );
    const dispatch = useDispatch();

    function handleRemoveProduct(product_id) {
        dispatch(CartActions.removeFromCart(product_id));
    }

    function incrementQuantity(product) {
        dispatch(CartActions.updateQuantityRequest(product.id, product.quantity + 1));
    }

    function decrementQuantity(product) {
        dispatch(CartActions.updateQuantityRequest(product.id, product.quantity - 1));
    }

    return (
        <Container>
            { cart.length > 0 ? (
                <>
                    <ProductTable>
                        <thead>
                            <tr>
                                <th />
                                <th>Produto</th>
                                <th>Qtd</th>
                                <th>Subtotal</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            { cart.map(item => (
                                <tr key={ item.id }>
                                    <td>
                                        <img src={ item.image } alt={ item.title } />
                                    </td>
                                    <td>
                                        <h4>{ item.title }</h4>
                                        <span>{ item.priceFormatted }</span>
                                    </td>
                                    <td>
                                        <div>
                                            <button type="button" onClick={ () => decrementQuantity(item) }>
                                                <MdRemoveCircleOutline size={ 20 } color="#7159c1" />
                                            </button>
                                            <input type="number" readOnly value={ item.quantity } />
                                            <button type="button" onClick={ () => incrementQuantity(item) }>
                                                <MdAddCircleOutline size={ 20 } color="#7159c1" />
                                            </button>
                                        </div>
                                    </td>
                                    <td>
                                        <span>{ item.subtotal }</span>
                                    </td>
                                    <td>
                                        <button type="button" onClick={ () => handleRemoveProduct(item.id) }>
                                            <MdDelete size={ 20 } color="#7159c1" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </ProductTable>
                    
                    <Footer>
                        <button type="button">Finalizar Pedido</button>

                        <Total>
                            <span>Total</span>
                            <strong>{ totalCart }</strong>
                        </Total>
                    </Footer>
                </>
            ) : null }
        </Container>
    );
}

export default Cart;