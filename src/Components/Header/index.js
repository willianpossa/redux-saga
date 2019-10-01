import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

import logo from '../../Assets/Images/logo.svg';

const Header = () => {
    
    return (
        <Container>
            <Link to="/">
                <img src={ logo } alt="RocketShoes" />
            </Link>
            <Cart to="/carrinho">
                <div>
                    <strong>Meu Carrinho</strong>
                    <span>3 itens</span>
                </div>
                <MdShoppingBasket 
                    size={ 36 }
                    color="#FFF"
                />
            </Cart>
        </Container>
    );
}

export default Header;