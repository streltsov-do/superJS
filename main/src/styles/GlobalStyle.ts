import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        /* font-family: 'Inter', sans-serif;
        letter-spacing: 0.01em;
        font-size: 14px;
        line-height: 17px;
        font-style: normal;
        font-weight: 400; */
        margin: 0;
        /* background-color: #0e1014; */
    }

    body *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    button {
        cursor: pointer;
    }
`;
export { GlobalStyle };
