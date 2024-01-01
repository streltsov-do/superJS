import React, { useState } from "react";
import { Menu, MenuProps, Space, Typography } from "antd";
import {
    InfoCircleOutlined,
    QuestionCircleOutlined,
    MehOutlined,
} from "@ant-design/icons";
import { Container } from "./styles/Header";
import { Link } from "react-router-dom";

const { Title } = Typography;

const items: MenuProps["items"] = [
    {
        label: (
            <a href="/">
                <Title level={1} type="success">
                    SuperJS
                </Title>
            </a>
        ),
        key: "SuperJS",
    },
    {
        label: (
            <Link to="/">
                <Space direction="horizontal">
                    <QuestionCircleOutlined style={{ fontSize: 21 }} />
                    <Title level={3} type="warning">
                        Tests
                    </Title>
                </Space>
            </Link>
        ),
        key: "Tests",
    },
    {
        label: (
            <Link to="/theory">
                <Space direction="horizontal">
                    <InfoCircleOutlined style={{ fontSize: 21 }} />
                    <Title level={3} type="warning">
                        Theory
                    </Title>
                </Space>
            </Link>
        ),
        key: "Theory",
    },
    {
        label: (
            <Link to="/third">
                <Space direction="horizontal">
                    <MehOutlined style={{ fontSize: 21 }} />
                    <Title level={3} type="warning">
                        Third
                    </Title>
                </Space>
            </Link>
        ),
        key: "Third",
    },
];

const Header = () => {
    const [current, setCurrent] = useState("tests");

    const onClick: MenuProps["onClick"] = (e) => {
        setCurrent(e.key);
    };

    return (
        <Menu
            items={items}
            selectedKeys={[current]}
            onClick={onClick}
            mode="horizontal"
        />
    );
};

export { Header };
