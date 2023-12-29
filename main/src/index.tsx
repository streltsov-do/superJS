import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";

import { GlobalStyle } from "./styles/GlobalStyle";
// import { FontStyles } from "./styles/Fonts/FontStyles";
import { store } from "./redux/reducers";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);

root.render(
    <>
        <React.StrictMode>
            {/* <FontStyles /> */}
            <GlobalStyle />
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
        ,
    </>,
);

// ReactDOM.render(
//     <>
//         {/* <React.StrictMode> */}
//         {/* <FontStyles /> */}
//         <GlobalStyle />
//         <App />
//         {/* </React.StrictMode>, */}
//     </>,

//     document.getElementById("root"),
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<App />);
