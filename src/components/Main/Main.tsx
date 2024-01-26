import React from "react";
import { Routes, Route } from "react-router-dom";
import { PageMain } from "../../pages/PageMain/PageMain";
import { PageTests } from "../../pages/PageTests/PageTests";
import { PageTheory } from "../../pages/PageTheory/PageTheory";
import { PageThird } from "../../pages/PageThird/PageThird";
import "./styles/style.css";

type typeRoutesArr = Array<{
    path: string;
    element: React.ReactElement;
}>;

const ARR_PATH: typeRoutesArr = [
    // {
    //     path: "/",
    //     element: <PageMain />,
    // },
    {
        path: "/tests",
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

interface propsType {
    openTestModal: (e: React.MouseEvent<HTMLElement>) => void;
}

const Main = (props: propsType) => {
    const { openTestModal } = props;

    return (
        <div className="main">
            <Routes>
                <Route
                    key={0}
                    path="/"
                    element={<PageMain openTestModal={openTestModal} />}
                />
                {ARR_PATH.map((item, index) => (
                    <Route
                        key={index + 1}
                        path={item.path}
                        element={item.element}
                        // exact="true"
                    />
                ))}
            </Routes>
        </div>
    );
};

export { Main };
