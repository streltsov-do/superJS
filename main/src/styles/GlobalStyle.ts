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

    .unselectable {
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        user-select: none;
    }

    pre, .title{
        font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';
        color: rgba(0, 0, 0, 0.88);
        font-weight: 600;
        font-size: 16px;
        line-height: 115%;
    }

`;
export { GlobalStyle };
