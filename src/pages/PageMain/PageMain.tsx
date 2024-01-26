import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, List, Space } from "antd";
import typography from "antd/es/typography";
import "./styles/style.css";

const { Title } = typography;

interface propsType {
    openTestModal: (e: React.MouseEvent<HTMLElement>) => void;
}

export const PageMain = (props: propsType) => {
    const { openTestModal } = props;

    return (
        <Space direction="vertical">
            <Title level={2} type="success">
                Добро пожаловать!
            </Title>
            <span className="description">
                Это сайт для удобного повторения JavaScript / HTML / CSS /
                TypeScript.
            </span>
            <span className="description">
                Выберите, в какой форме будете повторять и начинайте.
            </span>
            <List
                size="default"
                header={
                    <span className="list__header">
                        Варианты повторения материала:
                    </span>
                }
            >
                <List.Item style={{ gap: "80px" }}>
                    <span className="list__item">
                        Тестирование по разным категориям, темам и типам
                    </span>
                    <Button onClick={openTestModal} size="large">
                        Перейти к тестированию
                    </Button>
                </List.Item>
                <List.Item>
                    <span className="list__item">
                        Теория в форме сравнения похожих методов, коллекций и
                        тп.
                    </span>
                    <Link to="/theory" className="list__item">
                        Смотреть теорию
                    </Link>
                </List.Item>
                <List.Item>
                    <span className="list__item">
                        Разные полезные ссылки и другие материалы
                    </span>
                    <Link to="/third" className="list__item">
                        Полезное
                    </Link>
                </List.Item>
            </List>
        </Space>
    );
};
