import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
// import { Body } from "./components/BodyDiv/Body";

function App() {
    return (
        <BrowserRouter>
            {/* <Body> */}
                <Header />

                <Main />

                <Footer />
            {/* </Body> */}
        </BrowserRouter>
    );
}

export default App;
