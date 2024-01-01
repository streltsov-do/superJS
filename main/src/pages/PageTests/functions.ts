import { IntResults, IntTestUnit } from "../../components/TestUnit/constants";
import { IntStateTest } from "../../redux/sliceTest";


export const getResults = (arrSource: IntTestUnit[], arrAnswers: IntStateTest[]) => {
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

export const randomizeOrder = (data: IntTestUnit[]) => {
    const outArr : IntTestUnit[] = [];
    let varArr = data;

    for (let i=0; i<data.length; i++) {
        const num = Math.floor((varArr.length)*Math.random());
        outArr[i]=varArr[num];
        const data1=varArr.slice(0,num);
        const data2=varArr.slice(num+1,varArr.length);

        varArr=data1.concat(data2)
    }

    for (let i=0; i<outArr.length; i++) {
        for (let j=1; j<outArr.length; j++){
            if (outArr[i].id===outArr[j].id && i!==j) {
                console.log("ERROR!",i,j);
                return data;
            }
        }
    }

    return outArr;
}