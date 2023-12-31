import React, { useState } from "react";

import {
    Card,
    Radio,
    RadioChangeEvent,
    Skeleton,
    Space,
    Switch,
    Checkbox,
    Image,
} from "antd";
import type { CheckboxValueType } from "antd/es/checkbox/Group";

import { ARR_CHECK, compareNumbers, IntTestUnit } from "./constants";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { CHANGE, IntStateTest } from "../../redux/sliceTest";
// import { changeEx } from "../../redux/sliceExample";
import { RootState } from "../../redux/reducers";
import { goodLog } from "../../utils/functions";

interface PropsTestUnit extends IntTestUnit {
    num: number;
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

function TestUnit(props: PropsTestUnit) {
    const [value, setValue] = useState(-1);
    const [loading, setLoading] = useState(false);
    const {
        num = -1,
        id = -1,
        question = "Question, mark?",
        questionImg,
        variants = ["a", "b", "c"],
        answer = 2,
        explanation = "",
    } = props;

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

    return (
        <>
            <Card
                cover={
                    questionImg ? (
                        <Image src={questionImg} width="300px" />
                    ) : (
                        <></>
                    )
                }
                title={num + ". " + question}
            >
                {typeof answer !== "number" ? (
                    <Checkbox.Group onChange={onChangeCheck}>
                        <Space direction="vertical">
                            {variants.map((val, idx) => (
                                <Checkbox key={idx} value={idx}>
                                    {val}
                                </Checkbox>
                            ))}
                        </Space>
                    </Checkbox.Group>
                ) : (
                    <Radio.Group onChange={onChangeRadio} value={value}>
                        <Space direction="vertical">
                            {variants.map((val, idx) => (
                                <Radio key={idx} value={idx}>
                                    {val}
                                </Radio>
                            ))}
                        </Space>
                    </Radio.Group>
                )}
            </Card>
        </>
    );
}

export { TestUnit };
