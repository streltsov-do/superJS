import { IntResults, IntTestUnit } from "../types/commonTypes";

import { IntStateTest } from "../redux/sliceTest";
import { ANSWER_BAD, ANSWER_GOOD, ANSWER_NOT } from "./constants";
import { CheckboxValueType } from "antd/es/checkbox/Group";

export function compareNumbers(a: number, b: number) {
    return a - b;
}

export const getRightAnswer = (
    answerSrc: number | number[],
    answerUser: number | number[],
) => {
    let good = 1;

    if (answerUser === -1) {
        return -1;
    }
    if (Array.isArray(answerUser) && Array.isArray(answerSrc)) {
        for (let i = 0; i < answerSrc.length; i++) {
            if (answerUser[i] !== answerSrc[i]) {
                good = 0;
                break;
            }
        }
    } else {
        if (answerUser !== answerSrc) {
            good = 0;
        }
    }
    return good;
};

export const getBgColor = (complete: boolean, good: number) => {
    if (!complete) {
        return "transparent";
    }
    switch (good) {
        case 0:
            return ANSWER_BAD;
        case 1:
            return ANSWER_GOOD;
        default:
            return ANSWER_NOT;
    }
};

export const alignText = (data: string, log: boolean = false) => {
    let dataOut = data;
    if (dataOut[0] === "\n") {
        dataOut = dataOut.slice(1);
    }
    if (log) {
        console.log("del first line break:", dataOut);
    }
    let offset = 0;
    const dataOutArr = dataOut.split("\n");
    if (log) {
        console.log("split into string[]:", dataOutArr);
    }

    for (let i = 0; i < dataOutArr[0].length; i++) {
        if (dataOutArr[0][i] !== " ") {
            offset = i;
            break;
        }
    }
    let delLast = true;
    for (let i = 0; i < dataOutArr[dataOutArr.length - 1].length; i++) {
        if (dataOutArr[dataOutArr.length - 1][i] !== " ") {
            delLast = false;
            break;
        }
    }
    dataOutArr.length = delLast ? dataOutArr.length - 1 : dataOutArr.length;
    if (log) {
        console.log("delete last line:", dataOutArr);
    }

    for (let i = 0; i < dataOutArr.length; i++) {
        dataOutArr[i] = dataOutArr[i].slice(offset);
    }
    dataOut = dataOutArr.join("\n");
    if (log) {
        console.log("final data:", dataOut);
    }
    return dataOut;
};

export const getResults = (
    arrSource: IntTestUnit[],
    arrAnswers: IntStateTest[],
) => {
    const results: IntResults = {
        rightAnswers: 0,
        totalQuestions: arrAnswers.length,
        resultsArray: [],
    };
    for (let i = 0; i < arrSource.length; i++) {
        const answerUser = arrAnswers[i].answer;
        const answerSrc = arrSource[arrAnswers[i].id].answer;

        const good = getRightAnswer(answerSrc, answerUser);
        results.rightAnswers =
            good === 1 ? ++results.rightAnswers : results.rightAnswers;
        results.resultsArray[i] = good;
    }

    return results;
};

export const randomizeOrder = (data: IntTestUnit[]) => {
    const outArr: IntTestUnit[] = [];
    let varArr = data;

    for (let i = 0; i < data.length; i++) {
        const num = Math.floor(varArr.length * Math.random());
        outArr[i] = varArr[num];
        const data1 = varArr.slice(0, num);
        const data2 = varArr.slice(num + 1, varArr.length);

        varArr = data1.concat(data2);
    }

    for (let i = 0; i < outArr.length; i++) {
        for (let j = 1; j < outArr.length; j++) {
            if (outArr[i].id === outArr[j].id && i !== j) {
                console.log("ERROR!", i, j);
                return data;
            }
        }
    }

    return outArr;
};

export const initTests = (testsData: IntTestUnit[]) => {
    const out: IntStateTest[] = [];
    for (let i = 0; i < testsData.length; i++) {
        out.push({
            id: testsData[i].id,
            answer: -1,
        });
    }
    return out;
};

export const filterTests = (
    tests: IntTestUnit[],
    checkedValues: CheckboxValueType[],
    filter: number,
) => {
    switch (filter) {
        case 0:
    }
};
