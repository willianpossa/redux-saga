import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { Container, ProductTable, Footer, Total } from './styles';

const Cart = () => {
    const { items } = useSelector(
        state => state.cart
    );

    return (
        <Container>
            { items.length > 0 ? (
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
                            { items.map(item => (
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
                                            <button type="button">
                                                <MdRemoveCircleOutline size={ 20 } color="#7159c1" />
                                            </button>
                                            <input type="number" readOnly value={ item.quantity } />
                                            <button type="button">
                                                <MdAddCircleOutline size={ 20 } color="#7159c1" />
                                            </button>
                                        </div>
                                    </td>
                                    <td>
                                        <span>{ item.priceFormatted }</span>
                                    </td>
                                    <td>
                                        <button type="button">
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
                            <strong>R$ 259,80</strong>
                        </Total>
                    </Footer>
                </>
            ) : null }
        </Container>
    );
}

export default Cart;