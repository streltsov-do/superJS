import { createGlobalStyle } from "styled-components";
// import montserrat from "./Montserrat/Montserrat-Regular.ttf";

const FontStyles = createGlobalStyle`

    /* @font-face {
        font-family: 'Inter';
        src: url('./Inter/Inter-Regular.eot');
        src: url('./Inter/Inter-Regular.eot?#iefix') format('embedded-opentype')
            ,url('./Inter/Inter-Regular.woff2') format('woff2')
            ,url('./Inter/Inter-Regular.woff') format('woff')
            ,url('./Inter/Inter-Regular.ttf') format('truetype')
            ;
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Montserrat';
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    } */
`;


// src: url(${montserrat}) format('truetype');
export { FontStyles };
