export type QuestionSource = "hh" | "amo";
export const SOURCE_HH : QuestionSource = "hh";
export const SOURCE_AMO: QuestionSource = "amo";
export const FILTER_SOURCE = [SOURCE_HH, SOURCE_AMO];

export type QuestionCategory = "html" | "css" | "js" | "ts";
export const CAT_HTML: QuestionCategory = "html";
export const CAT_CSS: QuestionCategory = "css";
export const CAT_JS: QuestionCategory = "js";
export const CAT_TS: QuestionCategory = "ts";
export const FILTER_CATEGORY = [CAT_HTML, CAT_JS, CAT_CSS, CAT_TS];

export type QuestionType = "code" | "theory";
export const TYPE_CODE: QuestionType = "code";
export const TYPE_THEORY: QuestionType = "theory";
export const FILTER_TYPE = [TYPE_CODE, TYPE_THEORY];


export interface QuestionFilter {
    Source: QuestionSource[],
    Category: QuestionCategory[],
    Type : QuestionType[],
}

export interface IntTestUnit {
    id: number;
    source: QuestionSource;
    category: QuestionCategory;
    type: QuestionType;
    theme: "";
    weight?: number;
    question: string;
    questionImg?: string;
    variants: string[];
    answer: number | number[];
    answerImg?: string;
    explanation: string;
    code?: string | string[];
    codeImg?: string;
}

export interface IntResults {
    rightAnswers: number;
    totalQuestions: number;
    resultsArray: number[];
}