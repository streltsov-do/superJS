import React from "react";
import { Routes, Route } from "react-router-dom";
import { PageTests } from "../../pages/PageTests/PageTests";
import { PageTheory } from "../../pages/PageTheory/PageTheory";
import { PageThird } from "../../pages/PageThird/PageThird";

type typeRoutesArr = Array<{
    path: string;
    element: React.ReactElement;
}>;

const ARR_PATH: typeRoutesArr = [
    {
        path: "/",
        element: <PageTests />,
    },
    {
        path: "/theory",
        element: <PageTheory />,
    },
    {
        path: "/third",
        element: <PageThird />,
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
