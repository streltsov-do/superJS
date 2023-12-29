import React, { useState } from "react";

import {
    Card,
    Radio,
    RadioChangeEvent,
    Skeleton,
    Space,
    Switch,
    Checkbox,
} from "antd";
import type { CheckboxValueType } from "antd/es/checkbox/Group";

import { ARR_CHECK, IntTestUnit } from "./constants";
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
    newAnswerId: number | number[],
) => {
    const newState: IntStateTest[] = [];
    state.forEach((element, index) => {
        newState[index] = element;
    });

    const idx = state.map((x) => x.id).indexOf(id);
    if (idx === -1) {
        newState.push({ id: id, answerId: newAnswerId });
    } else {
        newState[idx] = { id: id, answerId: newAnswerId };
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
        variants = ["a", "b", "c"],
        answerId = 2,
        answer = "",
    } = props;

    const stateTest = useAppSelector((state: RootState) => state.test);

    const dispatch = useAppDispatch();

    const onChangeRadio = (e: RadioChangeEvent) => {
        setValue(e.target.value);

        const newAnswerId: number = e.target.value;

        const newState = setNewState(stateTest,id,newAnswerId);
        dispatch(CHANGE(newState));
    };

    const onChangeCheck = (checkedValues: CheckboxValueType[]) => {
        const newAnswerId: number[] = [];
        checkedValues.forEach((element, index) => {
            newAnswerId[index] = Number(element);
        });

        const newState = setNewState(stateTest,id,newAnswerId);
        dispatch(CHANGE(newState));
    };

    return (
        <>
            <Card title={num + ". " + question}>
                {typeof answerId !== "number" ? (
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
