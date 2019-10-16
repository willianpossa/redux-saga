import { createGlobalStyle } from 'styled-components';

import Background from '../Assets/Images/background.svg';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Nunito:300,400,600,700,800,900&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background-image: url(${ Background });
        background-repeat: no-repeat;
        background-position: center top;
        background-color: #191920;
        -webkit-font-smoothing: antialiased;
    }

    body,
    input,
    button {
        font: 14px Nunito
    }

    #root {
        max-width: 1020px;
        margin: 0 auto;
        padding: 0 20px 50px;
    }

    button {
        cursor: pointer;
    }
`