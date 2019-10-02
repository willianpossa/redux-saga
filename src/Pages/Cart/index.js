import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { Container, ProductTable, Footer, Total } from './styles';

import Product from '../../Assets/Images/product.jpg';

const Cart = () => {

    return (
        <Container>
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
                    <tr>
                        <td>
                            <img src={ Product } alt="Imagem do produto" />
                        </td>
                        <td>
                            <h4>Tênis muito legal</h4>
                            <span>R$ 129,90</span>
                        </td>
                        <td>
                            <div>
                                <button type="button">
                                    <MdRemoveCircleOutline size={ 20 } color="#7159c1" />
                                </button>
                                <input type="number" readOnly value={ 1 } />
                                <button type="button">
                                    <MdAddCircleOutline size={ 20 } color="#7159c1" />
                                </button>
                            </div>
                        </td>
                        <td>
                            <span>R$ 259,80</span>
                        </td>
                        <td>
                            <button type="button">
                                <MdDelete size={ 20 } color="#7159c1" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </ProductTable>
            
            <Footer>
                <button type="button">Finalizar Pedido</button>

                <Total>
                    <span>Total</span>
                    <strong>R$ 259,80</strong>
                </Total>
            </Footer>
        </Container>
    );
}

export default Cart;