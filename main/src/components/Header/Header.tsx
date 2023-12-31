import React from "react";
import { Typography } from "antd";
import { Container } from "./styles/Header";

const {Title} = Typography;

const Header = () => {

    return (
        <Container>
            <Title level={1} type='success'>Super(JS)</Title>
            <Title level={3} type='warning'>Tests, Theory, Third</Title>
        </Container>
    )
}

export {Header}