import React, { useEffect, useState } from "react";
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
import "./styles/style.css";

const { Title } = Typography;

const develop = {
    questionStrictOrder: false,
    testButton: false,
};

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
        color: <div className="square square--red" />,
        description: "Неправильный ответ",
    },
    {
        key: "2",
        name: "yellow",
        color: <div className="square square--yellow" />,
        description: "Нет ответа",
    },
    {
        key: "3",
        name: "green",
        color: <div className="square square--green" />,
        description: "Правильный ответ",
    },
];

const PageTests = () => {
    const [complete, setComplete] = useState(false);
    const [showCards, shsetShowCards] = useState(0);
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
    const [showAnswer, setShowAnswer] = useState(false);
    const [showCode, setShowCode] = useState(false);

    const showDrawer = () => {
        setOpenDrawer(true);
    };

    const closeDrawer = () => {
        setOpenDrawer(false);
    };

    const testState = useAppSelector((state: RootState) => state.test);
    const dispatch = useAppDispatch();

    const updateTests = () => {
        const newTests = develop.questionStrictOrder
            ? ARR_CHECK
            : randomizeOrder(ARR_CHECK);
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
            shsetShowCards(0);
            updateTests();
        }
        setResults(res);
        setComplete(!complete);
    };

    const onChangeRadio = (e: RadioChangeEvent) => {
        shsetShowCards(e.target.value);
    };

    const onChangeCheck = (checkedValues: CheckboxValueType[]) => {
        let answers = false;
        let code = false;
        for (const str of checkedValues) {
            if (str === "answers") {
                answers = true;
            }
            if (str === "code") {
                code = true;
            }
        }
        setShowAnswer(answers);
        setShowCode(code);
    };

    useEffect(() => {
        updateTests();
    }, []);

    const changeFilterSource = (checkedValues: CheckboxValueType[]) => {
        const newSource = checkedValues as QuestionSource[];
        setFilterState((filterState) => ({
            ...filterState,
            Source: newSource,
        }));
    };

    const changeFilterCategory = (checkedValues: CheckboxValueType[]) => {
        const newCategory = checkedValues as QuestionCategory[];
        setFilterState((filterState) => ({
            ...filterState,
            Category: newCategory,
        }));
    };

    const changeFilterType = (checkedValues: CheckboxValueType[]) => {
        const newType = checkedValues as QuestionType[];
        setFilterState((filterState) => ({
            ...filterState,
            Type: newType,
        }));
    };

    useEffect(() => {
        let newTests = tests;
        if (complete) {
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
        }
        setFilteredTests(newTests);
    }, [filterState, tests, complete]);

    const results_final: number =
        (results.rightAnswers / results.totalQuestions) * 100;

    return (
        <div className="page-test">
            <Title level={2}>Тестирование</Title>

            <Space direction="vertical" size="middle">
                {develop.testButton && (
                    <>
                        <Button size="large" onClick={handleClick}>
                            TST
                        </Button>
                    </>
                )}
                {complete && (
                    <>
                        <Space direction="vertical" size="small">
                            <Space>
                                <Title level={3}>Ваш результат</Title>
                                <Title
                                    level={3}
                                    type={
                                        results_final > 70
                                            ? "success"
                                            : results_final > 40
                                              ? "warning"
                                              : "danger"
                                    }
                                >
                                    {results_final.toFixed(2)}% [
                                    {results.rightAnswers}/
                                    {results.totalQuestions}]
                                </Title>
                            </Space>
                            <Button onClick={showDrawer}>Фильтры</Button>
                            <Drawer
                                placement="right"
                                open={openDrawer}
                                onClose={closeDrawer}
                                title="Фильтры"
                            >
                                <Space direction="vertical">
                                    <h4>Источник</h4>
                                    <Checkbox.Group
                                        onChange={changeFilterSource}
                                    >
                                        <Space direction="vertical">
                                            {FILTER_SOURCE.map((val, idx) => (
                                                <Checkbox key={idx} value={val}>
                                                    {val}
                                                </Checkbox>
                                            ))}
                                        </Space>
                                    </Checkbox.Group>
                                    <h4>Категория</h4>
                                    <Checkbox.Group
                                        onChange={changeFilterCategory}
                                    >
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
                            <Space
                                style={{
                                    padding: "5px",
                                    borderRadius: "5px",
                                    border: "1px solid #d9d9d9",
                                }}
                            >
                                <div>Подробности:</div>
                                <Radio.Group
                                    value={showCards}
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
                            </Space>
                            {showCards !== 0 && (
                                <Space
                                    style={{
                                        padding: "5px",
                                        borderRadius: "5px",
                                        border: "1px solid #d9d9d9",
                                    }}
                                >
                                    <div>Показать:</div>
                                    <Checkbox.Group onChange={onChangeCheck}>
                                        <Checkbox
                                            key="answers"
                                            value={"answers"}
                                        >
                                            Ответы
                                        </Checkbox>
                                        <Checkbox key="code" value={"code"}>
                                            Код для копирования
                                        </Checkbox>
                                    </Checkbox.Group>
                                </Space>
                            )}
                        </Space>
                        {showCards !== 0 && (
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
                                    (showCards === 1 &&
                                        results.resultsArray[index] !== 1) ||
                                    (showCards === 2 &&
                                        results.resultsArray[index] === 1) ||
                                    showCards === 3) && (
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
                                        code={elem.code}
                                        bgColor={getBgColor(
                                            complete,
                                            results.resultsArray[index],
                                        )}
                                        showAnswer={showAnswer}
                                        showCode={showCode}
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
        </div>
    );
};

export { PageTests };
