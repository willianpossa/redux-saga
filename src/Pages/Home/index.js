import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

import API from '../../Services/Api';

import { FormatPrice } from '../../Utils/Format';

import * as CartActions from '../../Store/Modules/Cart/Actions';

const Home = () => {
    const [products, setProducts] = useState([]);
    const quantityInCart = useSelector(
        state => state.cart.reduce((quantity, product) => {
            quantity[product.id] = product.quantity;

            return quantity;
        }, {})
    );
    const dispatch = useDispatch();

    function handleAddProduct(product_id) {
        dispatch(CartActions.addToCartRequest(product_id));
    }

    useEffect(() => {
        async function fetchProducts() {
            const response = await API.get('products');

            const data = response.data.map(item => ({
                ...item,
                priceFormatted: FormatPrice(item.price)
            }));

            setProducts(data);
        }

        fetchProducts();
    }, [])

    return (
        <ProductList>
            { products.map(product => (
                <li key={ product.id }>
                    <img src={ product.image } alt={ product.title } />
                    <h4>{ product.title }</h4>
                    <span>{ product.priceFormatted }</span>
                    <button 
                        onClick={ () => handleAddProduct(product.id) }
                        type="button"
                    >
                        <div>
                            <MdAddShoppingCart size={ 16 } color="#FFF" /> { quantityInCart[product.id] || 0 }
                        </div>
                        <span>Adicionar ao carrinho</span>
                    </button>
                </li>
            ))}
        </ProductList>
    );
}

export default Home;