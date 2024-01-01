import React from "react";
import { Routes, Route } from "react-router-dom";
import { PageTests } from "../../pages/PageTests/PageTests";

type typeRoutesArr = Array<{
    path: string;
    element: React.ReactElement;
}>;

const ARR_PATH: typeRoutesArr = [
    {
        path: "/",
        element: <PageTests />,
    },
];

const Main = () => {
    return (
        <Routes>
            {ARR_PATH.map((item, index) => (
                <Route
                    key={index}
                    path={item.path}
                    element={item.element}
                    // exact="true"
                />
            ))}
        </Routes>
    );
};

export { Main };
