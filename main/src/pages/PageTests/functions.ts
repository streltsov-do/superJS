import {
    ANSWER_BAD,
    ANSWER_GOOD,
    ANSWER_NOT,
    IntResults,
    IntTestUnit,
} from "../../components/TestUnit/constants";
import { IntStateTest } from "../../redux/sliceTest";

export const getRightAnswer = (
    answerSrc: number | number[],
    answerUser: number | number[],
) => {
    let good = 1;

    if (answerUser === -1) {
        return -1;
    }
    if (Array.isArray(answerUser) && Array.isArray(answerSrc)) {
        for (let j = 0; j < answerSrc.length; j++) {
            if (answerUser[j] !== answerSrc[j]) {
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

export const getResults = (
    arrSource: IntTestUnit[],
    arrAnswers: IntStateTest[],
) => {
    const results: IntResults = {
        rightAnswers: 0,
        totalQuestions: arrAnswers.length,
    };
    for (let i = 0; i < arrSource.length; i++) {
        const answerUser = arrAnswers[i].answer;
        const answerSrc = arrSource[arrAnswers[i].id].answer;

        const good = getRightAnswer(answerSrc, answerUser);
        results.rightAnswers = good
            ? ++results.rightAnswers
            : results.rightAnswers;
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
