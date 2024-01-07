import React, { useEffect, useState } from "react";
import { Container, Square } from "./styles/PageTests";
import { Check } from "../../components/TestUnit/Check";
import { TestUnit } from "../../components/TestUnit/TestUnit";
import {
    ANSWER_BAD,
    ANSWER_GOOD,
    ANSWER_NOT,
    ARR_CHECK,
    IntResults,
    IntTestUnit,
} from "../../components/TestUnit/constants";
import { Button, Radio, RadioChangeEvent, Space, Table } from "antd";
import { Typography } from "antd";
import { CHANGE } from "../../redux/sliceTest";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/reducers";
import {
    getResults,
    initTests,
    randomizeOrder,
    getRightAnswer,
    getBgColor,
} from "./functions";

const { Title } = Typography;

const tableColumns = [
    {
        key: "color",
        title: "Цвет",
        dataIndex: "color",
    },
    {
        key: "description",
        title: "Значение",
        dataIndex: "description",
    },
];

const tableData = [
    {
        key: "1",
        name: "red",
        color: <Square bgColor={ANSWER_BAD} />,
        description: "Неправильный ответ",
    },
    {
        key: "2",
        name: "yellow",
        color: <Square bgColor={ANSWER_NOT} />,
        description: "Нет ответа",
    },
    {
        key: "3",
        name: "green",
        color: <Square bgColor={ANSWER_GOOD} />,
        description: "Правильный ответ",
    },
];

const PageTests = () => {
    const [complete, setComplete] = useState(false);
    const [showAnswers, setShowAnswers] = useState(0);
    const [results, setResults] = useState({
        rightAnswers: 0,
        totalQuestions: 0,
    });
    const [tests, setTests] = useState<IntTestUnit[]>([]);

    const testState = useAppSelector((state: RootState) => state.test);
    const dispatch = useAppDispatch();

    const updateTests = () => {
        const newTests = randomizeOrder(ARR_CHECK);
        setTests(newTests);
        dispatch(CHANGE(initTests(newTests)));
    };

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        let res: IntResults = {
            rightAnswers: 0,
            totalQuestions: 0,
        };
        if (!complete) {
            res = getResults(ARR_CHECK, testState);
        } else {
            setShowAnswers(0);
            updateTests();
        }
        setResults(res);
        setComplete(!complete);
    };

    const onChangeRadio = (e: RadioChangeEvent) => {
        setShowAnswers(e.target.value);
    };

    useEffect(() => {
        updateTests();
    }, []);

    return (
        <Container>
            <Title level={2}>Тестирование</Title>

            {/* <hr></hr> */}
            {/* <Check></Check> */}
            <Space direction="vertical" size="middle">
                {/* <Button size="large" onClick={() => randomizeOrder(ARR_CHECK)}>
                    TST
                </Button> */}
                {complete && (
                    <>
                        <span>
                            Ваш результат{" "}
                            {(
                                (results.rightAnswers /
                                    results.totalQuestions) *
                                100
                            ).toFixed(2)}
                            % [{results.rightAnswers}/{results.totalQuestions}]
                        </span>
                        <Radio.Group
                            value={showAnswers}
                            onChange={onChangeRadio}
                        >
                            <Radio key="hide" value={0}>
                                Скрыть
                            </Radio>
                            <Radio key="bad" value={1}>
                                Показать ошибки
                            </Radio>
                            <Radio key="good" value={2}>
                                Показать правильные ответы
                            </Radio>
                            <Radio key="all" value={3}>
                                Показать всё
                            </Radio>
                        </Radio.Group>
                        {showAnswers !== 0 && (
                            <Table
                                columns={tableColumns}
                                dataSource={tableData}
                                pagination={false}
                                size="small"
                            />
                        )}
                    </>
                )}
                {
                    <Space direction="vertical" size="small">
                        {tests.map((elem, index) => {
                            const myAnswer = getRightAnswer(
                                elem.answer,
                                testState[index].answer,
                            );
                            return (
                                (!complete ||
                                    (showAnswers === 1 && myAnswer !== 1) ||
                                    (showAnswers === 2 && myAnswer === 1) ||
                                    showAnswers === 3) && (
                                    <TestUnit
                                        key={index}
                                        num={index + 1}
                                        id={elem.id}
                                        category={elem.category}
                                        type={elem.type}
                                        theme={elem.theme}
                                        weight={elem.weight}
                                        question={elem.question}
                                        questionImg={elem.questionImg}
                                        variants={elem.variants}
                                        answer={elem.answer}
                                        explanation={elem.explanation}
                                        complete={complete}
                                        userAnswer={testState[index].answer}
                                        bgColor={getBgColor(complete, myAnswer)}
                                    />
                                )
                            );
                        })}
                    </Space>
                    // )
                }
                <Button type="primary" size="large" onClick={handleClick}>
                    {complete ? "Выйти" : "Завершить"}
                </Button>
            </Space>
        </Container>
    );
};

export { PageTests };
