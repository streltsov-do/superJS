import { Card } from "antd";
import React from "react";
import { IntResults } from "../TestUnit/constants";

const TestResult = (props: { result: IntResults }) => {
    const { result } = props;
    const resPersent = ((result.rightAnswers/result.totalQuestions) * 100).toFixed(2);
    return (
        <Card>
            <span>Ваш результат {resPersent}% [{result.rightAnswers}/{result.totalQuestions}]</span>
        </Card>
    );
};

export { TestResult };
