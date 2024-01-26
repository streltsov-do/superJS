import React, { useEffect, useState } from "react";
import { Button, Menu, MenuProps, Space, Typography } from "antd";
import {
    InfoCircleOutlined,
    QuestionCircleOutlined,
    PlusCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./styles/style.css";

const { Title } = Typography;

interface propsType {
    openTestModal: (e: React.MouseEvent<HTMLElement>) => void;
    testStarted: boolean;
}

const Header = (props: propsType) => {
    const { openTestModal, testStarted } = props;
    const [current, setCurrent] = useState("tests");

    const onClick: MenuProps["onClick"] = (e) => {
        if (e.key !== "Tests") {
            setCurrent(e.key);
        }
    };

    useEffect(() => {
        setCurrent("Tests");
    }, [testStarted]);

    return (
        <Menu
            items={[
                {
                    label: (
                        <Link to="/">
                            <Title level={1} type="success">
                                SuperJS
                            </Title>
                        </Link>
                    ),
                    key: "SuperJS",
                },
                {
                    label: (
                        <Button
                            className="header__button"
                            onClick={openTestModal}
                        >
                            <div className="header__link">
                                <QuestionCircleOutlined
                                    style={{ fontSize: 30 }}
                                />
                                <h3 className="header__link__span">Tests</h3>
                            </div>
                        </Button>
                    ),
                    key: "Tests",
                },
                {
                    label: (
                        <Link to="/theory">
                            <div className="header__link">
                                <InfoCircleOutlined style={{ fontSize: 30 }} />
                                <h3 className="header__link__span">Theory</h3>
                            </div>
                        </Link>
                    ),
                    key: "Theory",
                },
                {
                    label: (
                        <Link to="/third">
                            <div className="header__link">
                                <PlusCircleOutlined style={{ fontSize: 30 }} />
                                <h3 className="header__link__span">Third</h3>
                            </div>
                        </Link>
                    ),
                    key: "Third",
                },
            ]}
            selectedKeys={[current]}
            onClick={onClick}
            mode="horizontal"
        />
    );
};

export { Header };
