import { Anchor, Space } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";

const PageThird = () => {
    return (
        <Space direction="vertical">
            {/* <Anchor> */}
            <Title level={1}>Полезные ссылки:</Title>
            {/* </Anchor> */}
            <Title level={3}>
                <a
                    href="https://flukeout.github.io/"
                    target={"_blank"}
                    rel="noreferrer"
                >
                    CSS-селекторы
                </a>
            </Title>
        </Space>
    );
};

export { PageThird };
