import React, { useState } from "react";

import { Card, Radio, RadioChangeEvent, Space, Checkbox, Image } from "antd";

import type { CheckboxValueType } from "antd/es/checkbox/Group";

import {
    ANSWER_BAD,
    ANSWER_GOOD,
    ANSWER_NOT,
    compareNumbers,
    IntTestUnit,
} from "./constants";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { CHANGE, IntStateTest } from "../../redux/sliceTest";
// import { changeEx } from "../../redux/sliceExample";
import { RootState } from "../../redux/reducers";

const { Meta } = Card;

interface PropsTestUnit extends IntTestUnit {
    num: number;
    complete: boolean;
    userAnswer: number | number[];
    bgColor: string;
}

const setNewState = (
    state: IntStateTest[],
    id: number,
    newAnswer: number | number[],
) => {
    const newState: IntStateTest[] = [];
    state.forEach((element, index) => {
        newState[index] = element;
    });

    const idx = state.map((x) => x.id).indexOf(id);
    if (idx === -1) {
        newState.push({ id: id, answer: newAnswer });
    } else {
        let newAnswerSort = newAnswer;
        if (Array.isArray(newAnswerSort)) {
            newAnswerSort.sort(compareNumbers);
        }
        newState[idx] = { id: id, answer: newAnswerSort };
    }
    return newState;
};

const gridAnswer: React.CSSProperties = {
    width: "50%",
};

const getColor = (
    complete: boolean,
    idx: number,
    answerSrc: number | number[],
    answerUser: number | number[],
) => {
    const answerSrcArr = answerSrc as number[];
    const answerUserArr = answerUser as number[];
    let borderStyle = {
        color: "",
        border: "none",
    };
    if (complete) {
        for (let i = 0; i < answerSrcArr.length; i++) {
            if (answerUserArr[i] === idx) {
                borderStyle.color = "pink";
                borderStyle.border = "solid";
            }
            if (answerSrcArr[i] === idx) {
                borderStyle.color = "lightgreen";
                borderStyle.border = "solid";
            }
        }
    }
    return borderStyle;
};

function TestUnit(props: PropsTestUnit) {
    const [value, setValue] = useState(-1);
    const {
        num,
        id,
        category,
        type,
        theme,
        weight,
        question,
        questionImg,
        variants,
        answer,
        explanation,
        complete,
        bgColor,
        userAnswer,
    } = props;

    const gridMain: React.CSSProperties = {
        width: complete ? "50%" : "100%",
    };

    const stateTest = useAppSelector((state: RootState) => state.test);

    const dispatch = useAppDispatch();

    const onChangeRadio = (e: RadioChangeEvent) => {
        setValue(e.target.value);

        const newAnswer: number = e.target.value;

        const newState = setNewState(stateTest, id, newAnswer);
        dispatch(CHANGE(newState));
    };

    const onChangeCheck = (checkedValues: CheckboxValueType[]) => {
        const newAnswer: number[] = [];
        checkedValues.forEach((element, index) => {
            newAnswer[index] = Number(element);
        });

        const newState = setNewState(stateTest, id, newAnswer);
        dispatch(CHANGE(newState));
    };

    const userAnswerConverted =
        userAnswer === -1 ? [] : (userAnswer as number[]);

    return (
        <Card
            cover={
                questionImg && (
                    <Image src={questionImg} width="500px" alt={`img_${id}`} />
                )
            }
            // title={num + ". " + question}
            title={<pre className="title">{num}. {question}</pre>}
            headStyle={{
                backgroundColor: bgColor,
                whiteSpace: "pre-wrap",
                paddingTop: "10px",
                paddingBottom: "10px",
            }}
        >
            <Card.Grid style={gridMain} hoverable={false}>
                {typeof answer !== "number" ? (
                    <Checkbox.Group
                        onChange={onChangeCheck}
                        disabled={complete}
                        defaultValue={userAnswerConverted}
                    >
                        {/* <Meta
                            title="Europe Street beat"
                            description="www.instagram.com"
                        /> */}
                        <Space direction="vertical">
                            {variants.map((val, idx) => {
                                const borderStyle = getColor(
                                    complete,
                                    idx,
                                    answer,
                                    userAnswer,
                                );
                                return (
                                    <Checkbox
                                        className="unselectable"
                                        key={idx}
                                        value={idx}
                                        style={{
                                            borderColor: borderStyle.color,
                                            borderStyle: borderStyle.border,
                                            borderWidth: 2,
                                            borderRadius: 5,
                                        }}
                                    >
                                        {val}
                                    </Checkbox>
                                );
                            })}
                        </Space>
                    </Checkbox.Group>
                ) : (
                    <Radio.Group
                        onChange={onChangeRadio}
                        defaultValue={complete ? userAnswer : value}
                        disabled={complete}
                    >
                        <Space direction="vertical">
                            {variants.map((val, idx) => (
                                <Radio
                                    className="unselectable"
                                    key={idx}
                                    value={idx}
                                    style={{
                                        color: complete
                                            ? idx === answer
                                                ? "green"
                                                : idx === userAnswer
                                                  ? "red"
                                                  : ""
                                            : "",
                                    }}
                                >
                                    {val}
                                </Radio>
                            ))}
                        </Space>
                    </Radio.Group>
                )}
            </Card.Grid>
            {complete && (
                <Card.Grid style={gridAnswer} hoverable={false}></Card.Grid>
            )}
        </Card>
    );
}

export { TestUnit };
