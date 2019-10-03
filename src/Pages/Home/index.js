import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

import API from '../../Services/Api';
import { FormatPrice } from '../../Utils/Format';

const Home = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    function handleAddProduct(product) {
        dispatch({
            type: 'ADD_TO_CART',
            product
        });
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
                        onClick={ () => handleAddProduct(product) }
                        type="button"
                    >
                        <div>
                            <MdAddShoppingCart size={ 16 } color="#FFF" /> 3
                        </div>
                        <span>Adicionar ao carrinho</span>
                    </button>
                </li>
            ))}
        </ProductList>
    );
}

export default Home;