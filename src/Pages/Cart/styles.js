import styled from 'styled-components';
import { darken } from 'polished';

const Container = styled.div`
    padding: 30px;
    background-color: #FFF;
    border-radius: 4px;
`;

const ProductTable = styled.table`
    width: 100%;

    thead th {
        color: #999;
        text-align: left;
        padding: 12px;
        text-transform: uppercase;
    }

    tbody td {
        padding: 12px;
        border-bottom: 1px solid #EEE;

        div {
            display: flex;
            align-items: center;
        }
    }

    img {
        height: 100px;
    }

    strong {
        color: #333;
        display: block;
    }

    span {
        display: block;
        margin-top: 5px;
        font-size: 18px;
        font-weight: bold;
    }
    
    button {
        padding: 6px;
        background: none;
        border: 0;
    }

    div {
        input {
            border: 1px solid #DDD;
            border-radius: 4px;
            color: #666;
            padding: 6px;
            width: 50px;
            text-align: center;
        }
    }
`;

const Footer = styled.footer`
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        background: #7159c1;
        color: #FFF;
        border: 0;
        border-radius: 4px;
        padding: 12px 20px;
        font-weight: bold;
        text-transform: uppercase;
        transition: background .2s ease-in-out;

        &:hover {
            background: ${ darken(0.1, '#7159c1') };
        }
    }
`;

const Total = styled.div`
    display: flex;
    align-items: baseline;

    span {
        color: #999;
        font-weight: bold;
        text-transform: uppercase;
    }

    strong {
        font-size: 24px;
        margin-left: 8px;
    }
`;

export {
    Container,
    ProductTable,
    Footer,
    Total
};