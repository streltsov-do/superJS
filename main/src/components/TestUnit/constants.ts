export interface IntTestUnit {
    id: number;
    question: string;
    variants: string[];
    answerId: number | number[];
    answer: string;
}

const ARR_CHECK: IntTestUnit[] = [
    {
        id: 0,
        question: "Что такое DOM?",
        variants: [
            "Браузерный движок",
            "Объектная модель документа",
            "Механизм для работы с XML-документами",
        ],
        answerId: 1,
        answer: "",
    },
    {
        id: 1,
        question:
            "Какие виды областей видимости есть в JS (ES6+)? (Несколько вариантов ответов)",
        variants: ["Модульная", "Глобальная", "Функциональная", "Блочная"],
        answerId: [0, 1, 2, 3],
        answer: "",
    },
    {
        id: 2,
        question:
            "Какие значения в JS являются ложными (falsy)? (Несколько вариантов ответов)",
        variants: ['""', "[]", "0", "null"],
        answerId: [0, 1, 2, 3],
        answer: "",
    },
    {
        id: 3,
        question: 'Что делает оператор "!!"',
        variants: [
            "Инвертирует без приведения типов",
            "Определяет выражение, которое должно быть вычислено без возвращения результата",
            "Приводит к булевому типу",
            "Такого оператора не существует",
        ],
        answerId: 0,
        answer: "",
    },
    {
        id: 4,
        question:
            "В чем специфика стрелочных функций (arrow function) (Несколько вариантов ответов)",
        variants: [
            "нет собственного this",
            "Определяет выражение, которое должно быть вычислено без возвращения результата",
            "Приводит к булевому типа",
            "Такого оператора не существует",
        ],
        answerId: 3,
        answer: `An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

            Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
            Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
            Arrow functions cannot use yield within their body and cannot be created as generator functions.`,
    },
    {
        id: 5,
        question:
            "Какая арифметическая операция приведёт к ошибке",
        variants: [
            "Умножение числа на строку",
            "Корень из отрицательного числа",
            "Никакая из вышеперечисленных",
            "Всё из вышеперечисленных",
        ],
        answerId: 2,
        answer: ``,
    },
];

export { ARR_CHECK };
