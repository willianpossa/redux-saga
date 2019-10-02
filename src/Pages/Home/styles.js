import styled from 'styled-components';
import { darken } from 'polished';

const ProductList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    list-style: none;

    li {
        display: flex;
        flex-direction: column;
        background-color: #FFF;
        border-radius: 4px;
        padding: 20px;

        > img {
            align-self: center;
            max-width: 250px;
        }

        > h4 {
            font-size: 16px;
            line-height: 20px;
            color: #333;
            margin-top: 5px;
        }

        > span {
            font-size: 21px;
            font-weight: bold;
            margin: 5px 0 20px;
        }

        > button {
            background-color: #7159c1;
            color: #FFF;
            overflow: hidden;
            border-radius: 4px;
            border: none;
            margin-top: auto;
            display: flex;
            align-items: center;
            transition: background-color .2s ease-in-out;;

            &:hover {
                background-color: ${ darken(0.1, '#7159c1') }
            }

            span {
                text-transform: uppercase;
                font-weight: bold;
                flex: 1;
            }

            div {
                display: flex;
                align-items: center;
                padding: 12px;
                background-color: rgba(0, 0, 0, 0.1);

                svg {
                    margin-right: 5px;
                }
            }
        }
    }
`;

export {
    ProductList
};