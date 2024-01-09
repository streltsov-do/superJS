import React, { useEffect, useState } from "react";
import { Container, Square } from "./styles/PageTests";
import { Check } from "../../components/TestUnit/Check";
import { TestUnit } from "../../components/TestUnit/TestUnit";

import {
    Button,
    Checkbox,
    Drawer,
    Radio,
    RadioChangeEvent,
    Space,
    Table,
} from "antd";
import { Typography } from "antd";
import { CHANGE } from "../../redux/sliceTest";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/reducers";
import {
    FILTER_CATEGORY,
    FILTER_SOURCE,
    FILTER_TYPE,
    IntResults,
    IntTestUnit,
    QuestionCategory,
    QuestionFilter,
    QuestionSource,
    QuestionType,
} from "../../types/commonTypes";
import { ARR_CHECK } from "../../components/TestUnit/constants";
import { ANSWER_BAD, ANSWER_GOOD, ANSWER_NOT } from "../../utils/constants";
import {
    getResults,
    initTests,
    randomizeOrder,
    getBgColor,
} from "../../utils/functions";
import { CheckboxValueType } from "antd/es/checkbox/Group";

const { Title } = Typography;

const develop = false;

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
    const [results, setResults] = useState<IntResults>({
        rightAnswers: 0,
        totalQuestions: 0,
        resultsArray: [],
    });
    const [tests, setTests] = useState<IntTestUnit[]>([]);
    const [filterState, setFilterState] = useState<QuestionFilter>({
        Source: [],
        Category: [],
        Type: [],
    });
    const [filteredTests, setFilteredTests] = useState<IntTestUnit[]>([]);
    const [openDrawer, setOpenDrawer] = useState(false);

    const showDrawer = () => {
        setOpenDrawer(true);
    };

    const closeDrawer = () => {
        setOpenDrawer(false);
    };

    const testState = useAppSelector((state: RootState) => state.test);
    const dispatch = useAppDispatch();

    const updateTests = () => {
        const newTests = develop ? ARR_CHECK : randomizeOrder(ARR_CHECK);
        setTests(newTests);
        dispatch(CHANGE(initTests(newTests)));
    };

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        let res: IntResults = {
            rightAnswers: 0,
            totalQuestions: 0,
            resultsArray: [],
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

    const changeFilterSource = (checkedValues: CheckboxValueType[]) => {
        let newFilterState = filterState;
        newFilterState.Source = checkedValues as QuestionSource[];
        setFilterState((filterState) => ({
            ...filterState,
            newFilterState,
        }));
    };

    const changeFilterCategory = (checkedValues: CheckboxValueType[]) => {
        let newFilterState = filterState;
        newFilterState.Category = checkedValues as QuestionCategory[];
        setFilterState((filterState) => ({
            ...filterState,
            newFilterState,
        }));
    };

    const changeFilterType = (checkedValues: CheckboxValueType[]) => {
        let newFilterState = filterState;
        newFilterState.Type = checkedValues as QuestionType[];
        setFilterState((filterState) => ({
            ...filterState,
            newFilterState,
        }));
    };

    useEffect(() => {
        let newTests = tests;
        if (filterState.Source.length > 0) {
            newTests = newTests.filter((elem) => {
                return filterState.Source.indexOf(elem.source) >= 0;
            });
        }
        if (filterState.Category.length > 0) {
            newTests = newTests.filter((elem) => {
                return filterState.Category.indexOf(elem.category) >= 0;
            });
        }
        if (filterState.Type.length > 0) {
            newTests = newTests.filter((elem) => {
                return filterState.Type.indexOf(elem.type) >= 0;
            });
        }
        setFilteredTests(newTests);
    }, [filterState, tests]);

    return (
        <Container>
            <Title level={2}>Тестирование</Title>

            {/* <hr></hr> */}
            {/* <Check></Check> */}
            <Space direction="vertical" size="middle">
                {develop && (
                    <Button size="large" onClick={handleClick}>
                        TST
                    </Button>
                )}
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
                        <Button onClick={showDrawer}>Фильтры</Button>
                        <Drawer
                            placement="right"
                            open={openDrawer}
                            onClose={closeDrawer}
                            title="Фильтры"
                        >
                            <Space direction="vertical">
                                <h4>Источник</h4>
                                <Checkbox.Group onChange={changeFilterSource}>
                                    <Space direction="vertical">
                                        {FILTER_SOURCE.map((val, idx) => (
                                            <Checkbox key={idx} value={val}>
                                                {val}
                                            </Checkbox>
                                        ))}
                                    </Space>
                                </Checkbox.Group>
                                <h4>Категория</h4>
                                <Checkbox.Group onChange={changeFilterCategory}>
                                    <Space direction="vertical">
                                        {FILTER_CATEGORY.map((val, idx) => (
                                            <Checkbox key={idx} value={val}>
                                                {val}
                                            </Checkbox>
                                        ))}
                                    </Space>
                                </Checkbox.Group>
                                <h4>Тип</h4>
                                <Checkbox.Group onChange={changeFilterType}>
                                    <Space direction="vertical">
                                        {FILTER_TYPE.map((val, idx) => (
                                            <Checkbox key={idx} value={val}>
                                                {val}
                                            </Checkbox>
                                        ))}
                                    </Space>
                                </Checkbox.Group>
                            </Space>
                        </Drawer>
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
                        {filteredTests.map(
                            (elem, index) =>
                                (!complete ||
                                    (showAnswers === 1 &&
                                        results.resultsArray[index] !== 1) ||
                                    (showAnswers === 2 &&
                                        results.resultsArray[index] === 1) ||
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
                                        source={elem.source}
                                        bgColor={getBgColor(
                                            complete,
                                            results.resultsArray[index],
                                        )}
                                    />
                                ),
                        )}
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
