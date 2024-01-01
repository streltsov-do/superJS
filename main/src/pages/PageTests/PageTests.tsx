import React, { useState } from "react";
import { Container } from "./styles/PageTests";
import { Check } from "../../components/TestUnit/Check";
import { TestUnit } from "../../components/TestUnit/TestUnit";
import { ARR_CHECK, IntResults, IntTestUnit } from "../../components/TestUnit/constants";
import { Button, Space } from "antd";
import { Typography } from "antd";
import { TestResult } from "../../components/TestResult/TestResult";
import { CHANGE, IntStateTest } from "../../redux/sliceTest";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/reducers";
import { getResults, randomizeOrder } from "./functions";

const { Title } = Typography;

const PageTests = () => {
    const [complete, setComplete] = useState(false);
    const [results, setResults] = useState({
        rightAnswers: 0,
        totalQuestions: 0,
    });

    const testState = useAppSelector((state: RootState) => state.test);
    const dispatch = useAppDispatch();

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        let res: IntResults = {
            rightAnswers: 0,
            totalQuestions: 0,
        };
        if (!complete) {
            res = getResults(ARR_CHECK, testState);
            // console.log("results", res);
            setResults(res);
        } else {
            const newState: IntStateTest[] = [];
            dispatch(CHANGE(newState));
        }
        setResults(res);
        setComplete(!complete);
    };

    const ARR_CHECK_RND : IntTestUnit[] = randomizeOrder(ARR_CHECK);

    return (
        <Container>
            <Title level={2}>Тестирование</Title>

            {/* <hr></hr> */}
            {/* <Check></Check> */}
            <Space direction="vertical" size="middle">
                {/* <Button size="large" onClick={() => randomizeOrder(ARR_CHECK)}>
                    TST
                </Button> */}
                {complete ? (
                    <TestResult result={results} />
                ) : (
                    <Space direction="vertical" size="middle">
                        {ARR_CHECK_RND.map((elem, index) => (
                            <TestUnit
                                key={index}
                                num={index + 1}
                                id={elem.id}
                                question={elem.question}
                                questionImg={elem.questionImg}
                                variants={elem.variants}
                                answer={elem.answer}
                                explanation={elem.explanation}
                            />
                        ))}
                    </Space>
                )}
                <Button type="primary" size="large" onClick={handleClick}>
                    {complete ? "Выйти" : "Завершить"}
                </Button>
            </Space>
        </Container>
    );
};

export { PageTests };
