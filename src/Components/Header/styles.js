import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px 0;
`;

const Cart = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: opacity .2s;
    will-change: opacity;

    div {
        margin-right: 10px;
        text-align: right;

        strong {
            display: block;
            color: #FFF;
        }

        span {
            font-size: 12px;
            color: #999;
        }
    }

    &:hover {
        opacity: 0.7;
    }
`

export {
    Container,
    Cart
};