import id_9  from "./img/id_9.jpg";
import id_10 from "./img/id_10.jpg";
import id_11 from "./img/id_11.jpg";
import id_12 from "./img/id_12.jpg";
import id_13 from "./img/id_13.jpg";
import id_14 from "./img/id_14.jpg";

export interface IntTestUnit {
    id: number;
    question: string;
    questionImg?: string;
    variants: string[];
    answer: number | number[];
    category?: string;
    weight?: number;
    explanation: string;
    code?: string;
    codeImg?: string;
}

export interface IntResults {
    rightAnswers: number;
    totalQuestions: number;
}

export function compareNumbers(a: number, b: number) {
    return a - b;
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
        answer: 1,
        category: "",
        weight: 1,
        explanation: `
            Объектная Модель Документа (DOM) – это программный интерфейс (API) для HTML и XML документов. DOM предоставляет структурированное представление документа и определяет то, как эта структура может быть доступна из программ, которые могут изменять содержимое, стиль и структуру документа. Представление DOM состоит из структурированной группы узлов и объектов, которые имеют свойства и методы. По существу, DOM соединяет веб-страницу с языками описания сценариев либо языками программирования.
        `,
    },
    {
        id: 1,
        question:
            "Какие виды областей видимости есть в JS (ES6+)? (Несколько вариантов ответов)",
        variants: ["Модульная", "Глобальная", "Функциональная", "Блочная"],
        answer: [0, 1, 2, 3],
        category: "",
        weight: 1,
        explanation: `
        `,
    },
    {
        id: 2,
        question:
            "Какие значения в JS являются ложными (falsy)? (Несколько вариантов ответов)",
        variants: ['""', "[]", "0", "null"],
        answer: [0, 2, 3],
        category: "",
        weight: 1,
        explanation: `
        `,
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
        answer: 2,
        category: "",
        weight: 1,
        explanation: `
        `,
    },
    {
        id: 4,
        question:
            "В чем специфика стрелочных функций (arrow function) (Несколько вариантов ответов)",
        variants: [
            "нет собственного this",
            "Можно использовать только в виде callback",
            "Нет доступа к arguments",
            "Нельзя использовать как асинхронную функцию",
        ],
        answer: [0, 2],
        category: "",
        weight: 2,
        explanation: `
            An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

            Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
            Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
            Arrow functions cannot use yield within their body and cannot be created as generator functions.
        `,
    },
    {
        id: 5,
        question: "Какая арифметическая операция приведёт к ошибке",
        variants: [
            "Умножение числа на строку",
            "Корень из отрицательного числа",
            "Никакая из вышеперечисленных",
            "Всё из вышеперечисленных",
        ],
        answer: 2,
        category: "",
        weight: 2,
        explanation: `
        `,
    },
    {
        id: 6,
        question: "Сколько параметров можно передать функции",
        variants: [
            "Ровно столько, сколько указано в объявлении функции",
            "Ровно столько, сколько указано в объявлении функции или меньше",
            "Ровно столько, сколько указано в объявлении функции или больше",
            "Любое количество",
        ],
        answer: 3,
        category: "",
        weight: 1,
        explanation: `
        `,
    },
    {
        id: 7,
        question: "Что такое Promise?",
        variants: [
            "Конструкция для блокировки выполнения асинхронного запроса",
            "Способ работы с асинхронным кодом",
            "Механизм изменения контекста выполнения функции",
        ],
        answer: 2,
        category: "",
        weight: 1,
        explanation: `
        `,
    },

    {
        id: 8,
        question: "Для чего используется ключевое слово new?",
        variants: [
            "Создание нового потока выполнения",
            "Создание экземпляра класса",
            "Выход из цикла",
        ],
        answer: 3,
        category: "",
        weight: 1,
        explanation: `
        `,
    },
    {
        id: 9,
        question: "Что будет результатом выполнения данного кода?",
        questionImg: id_9,
        variants: ["true false", "null null", "42 null", "42 42"],
        answer: 3,
        category: "code",
        weight: 1,
        explanation: `
        `,
        code: `
            const a = 42;
            const b = null;

            console.log(a || b);
            console.log(a && b);
        `,
    },
    {
        id: 10,
        question: "Что будет результатом выполнения данного кода?",
        questionImg: id_10,
        variants: ["logOr logAnd", "logOr", "logAnd", "Ошибка"],
        answer: 2,
        category: "code",
        weight: 1,
        explanation: `
        `,
        code: `
            let x=0;
            let y=1;

            const logOr = (one, two) => {
                if (one || two) {
                    console.log('logOr');
                }
            }
            
            const logAnd = (one, two) => {
                if (one && two) {
                    console.log('logOr');
                }
            }

            logOr(x,y);
            logAnd(x,y);
        `,
    },
    {
        id: 11,
        question: "Что будет результатом выполнения данного кода?",
        questionImg: id_11,
        variants: ["1", "2", "NaN", "undefined", "Ошибка"],
        answer: 1,
        category: "code",
        weight: 1,
        explanation: `
        `,
        code: `
            let y = 1;
            let x = y = 2;

            alert(x);
        `,
    },
    {
        id: 12,
        question: "Что будет результатом выполнения данного кода?",
        questionImg: id_12,
        variants: [
            `Вывод "Hello"`,
            "Ошибка - нельзя вызвать функцию до её объявления",
        ],
        answer: 0,
        category: "code",
        weight: 1,
        explanation: `
            Поднятие (Hoisting) переменных/функций: объявление переменной или функции физически перемещается в начало вашего кода. 
            На самом же деле, объявления переменных и функций попадают в память в процессе фазы компиляции, но остаются в коде на том месте, где вы их объявили.
        `,
        code: `
            sayHi();

            function sayHi() {
                alert("Hello");
            }
        `,
    },
    {
        id: 13,
        question: "Что будет результатом выполнения данного кода?",
        questionImg: id_13,
        variants: ["undefined", "10", "9", "Цикл не завершится", "Ошибка"],
        answer: 0,
        category: "code",
        weight: 1,
        explanation: `
                i - блочная переменная (объявлена с помощью "let"). Вне цикла не существует
            `,
        code: `
                for(let i=0; i<10; i++) {
                    // some awesome code
                }

                console.log(i)
            `,
    },
    {
        id: 14,
        question: "Что будет результатом выполнения данного кода?",
        questionImg: id_14,
        variants: ["false, false ", "false, true", "true, false", "true, true"],
        answer: 0,
        category: "code",
        weight: 1,
        explanation: `
                Сравниваются ссылки на массив - не могут быть одинаковыми при объявлении 
                (могут быть равными только при присваивании массива ??)
            `,
        code: `
                const arr1 = [1, 2, 3];
                const arr2 = [1, 2, 3];

                console.log(arr1 == arr2);
                console.log(arr1 === arr2);
            `,
    },
];

// {
//     id: 13,
//     question: "????????????????????????? ?",
//     questionImg: "",
//     variants: ["1111111", "2222222222", "333333333", "44444444444", "5555555555555555"],
//     answer: 0,
//     category: "category",
//     weight: 1,
//     explanation: `
//     `,
//     code: `
//     `,
// },

export { ARR_CHECK };
