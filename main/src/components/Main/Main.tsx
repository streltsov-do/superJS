import React, { useState } from "react";
import { Container } from "./styles/Main";
import { Check } from "../TestUnit/Check";
import { TestUnit } from "../TestUnit/TestUnit";
import { ARR_CHECK, IntResults, IntTestUnit } from "../TestUnit/constants";
import { Button, Space } from "antd";
import { Typography } from "antd";
import { TestResult } from "../TestResult/TestResult";
import { IntStateTest } from "../../redux/sliceTest";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/reducers";

const { Title } = Typography;

const getResults = (arrSource: IntTestUnit[], arrAnswers: IntStateTest[]) => {
    const results: IntResults = {
        rightAnswers: 0,
        totalQuestions: arrAnswers.length,
    };
    for (let i = 0; i < arrAnswers.length; i++) {
        let good = true;

        const answerUser = arrAnswers[i].answer;
        const answerSrc = arrSource[arrAnswers[i].id].answer;
        if (Array.isArray(answerUser) && Array.isArray(answerSrc)) {
            for (let j = 0; j < answerUser.length; j++) {
                if (answerUser[j] !== answerSrc[j]) {
                    good = false;
                    break;
                }
            }
        } else {
            if (answerUser !== answerSrc) {
                good = false;
            }
        }
        results.rightAnswers = good
            ? ++results.rightAnswers
            : results.rightAnswers;
    }

    return results;
};

const Main = () => {
    const [complete, setComplete] = useState(false);
    const [results, setResults] = useState({
        rightAnswers: 0,
        totalQuestions: 0,
    });

    const testState = useAppSelector((state: RootState) => state.test);

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        let res: IntResults = {
            rightAnswers: 0,
            totalQuestions: 0,
        };
        if (!complete) {
            res = getResults(ARR_CHECK, testState);
            console.log("results", res);
            setResults(res);
        }
        setComplete(!complete);
    };

    return (
        <Container>
            <Title level={2}>Tests</Title>

            {/* <hr></hr> */}
            {/* <Check></Check> */}
            <Space direction="vertical" size="middle">
                {complete ? (
                    <TestResult result={results} />
                ) : (
                    <Space direction="vertical" size="middle">
                        {ARR_CHECK.map((elem, index) => (
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

export { Main };
