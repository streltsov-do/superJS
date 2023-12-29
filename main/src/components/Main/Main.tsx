import React from "react";
import { Container } from "./styles/Main";
import { Check } from "../TestUnit/Check";
import { TestUnit } from "../TestUnit/TestUnit";
import { ARR_CHECK } from "../TestUnit/constants";
import { Space } from "antd";
import { Typography } from "antd";

const { Title } = Typography;

const Main = () => {
    return (
        <Container>
            <Title level={2}>Tests</Title>
            {/* <hr></hr> */}
            {/* <Check></Check> */}
            <Space direction="vertical" size="middle">
                {ARR_CHECK.map((elem, index) => (
                    <TestUnit
                        key={index}
                        num={index + 1}
                        id={elem.id}
                        question={elem.question}
                        variants={elem.variants}
                        answerId={elem.answerId}
                        answer={elem.answer}
                    />
                ))}
            </Space>
        </Container>
    );
};

export { Main };
