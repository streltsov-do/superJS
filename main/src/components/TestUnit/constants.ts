import question_9 from "./img/question_9.jpg";
import question_10 from "./img/question_10.jpg";
import question_11 from "./img/question_11.jpg";
import question_12 from "./img/question_12.jpg";
import question_13 from "./img/question_13.jpg";
import question_14 from "./img/question_14.jpg";
import question_15 from "./img/question_15.jpg";
import question_16 from "./img/question_16.jpg";
import question_17 from "./img/question_17.jpg";
import question_18 from "./img/question_18.jpg";
import question_19 from "./img/question_19.jpg";
import question_20 from "./img/question_20.jpg";
import question_21 from "./img/question_21.jpg";
import question_22 from "./img/question_22.jpg";
import question_23 from "./img/question_23.jpg";
import question_24 from "./img/question_24.jpg";
import question_25 from "./img/question_25.jpg";
import question_26 from "./img/question_26.jpg";
import question_27 from "./img/question_27.jpg";

import answer_15 from "./img/answer_15.jpg";

export interface IntTestUnit {
    id: number;
    question: string;
    questionImg?: string;
    variants: string[];
    answer: number | number[];
    type: string,
    category: string;
    weight?: number;
    explanation: string;
    code?: string | string[];
    codeImg?: string;
}

export interface IntResults {
    rightAnswers: number;
    totalQuestions: number;
}

export function compareNumbers(a: number, b: number) {
    return a - b;
}

export const ANSWER_GOOD = "lightgreen";
export const ANSWER_BAD = "pink";
export const ANSWER_NOT = "#FFEC59";

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
        type: "theory",
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
        type: "theory",
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
        type: "theory",
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
        type: "theory",
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
        type: "theory",
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
        type: "theory",
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
        type: "theory",
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
        answer: 1,
        type: "theory",
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
        answer: 1,
        type: "theory",
        category: "",
        weight: 1,
        explanation: `
        `,
    },
    {
        id: 9,
        question: "Что будет результатом выполнения данного кода?",
        questionImg: question_9,
        variants: ["true false", "null null", "42 null", "42 42"],
        answer: 2,
        type: "code",
        category: "",
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
        questionImg: question_10,
        variants: ["logOr logAnd", "logOr", "logAnd", "Ошибка"],
        answer: 1,
        type: "code",
        category: "",
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
        questionImg: question_11,
        variants: ["1", "2", "NaN", "undefined", "Ошибка"],
        answer: 1,
        type: "code",
        category: "",
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
        questionImg: question_12,
        variants: [
            `Вывод "Hello"`,
            "Ошибка - нельзя вызвать функцию до её объявления",
        ],
        answer: 0,
        type: "code",
        category: "",
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
        questionImg: question_13,
        variants: ["undefined", "10", "9", "Цикл не завершится", "Ошибка"],
        answer: 0,
        type: "code",
        category: "",
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
        questionImg: question_14,
        variants: ["false, false ", "false, true", "true, false", "true, true"],
        answer: 0,
        type: "code",
        category: "",
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
    {
        id: 15,
        question: "Что будет результатом выполнения данного кода?",
        questionImg: question_15,
        variants: ["Ivan", "undefined", "Ошибка"],
        answer: 2,
        type: "code",
        category: "",
        weight: 2,
        explanation: `
            This ссылается на глобальный объект, в строгом режиме будет ошибка.
        `,
        code: `
            'use strict'

            let user = {
                name: 'Ivan',
                getName() {
                    return this.name;
                }
            }
            
            const getUserName = user.getName;
            console.log('user name is ' + getUserName());
        `,
    },
    {
        id: 16,
        question: "Что будет результатом выполнения данного кода?",
        questionImg: question_16,
        variants: ["Ошибка", "12", "undefined"],
        answer: 0,
        type: "code",
        category: "",
        weight: 2,
        explanation: `
            This ссылается на глобальный объект, в строгом режиме будет ошибка.
        `,
        code: `
        `,
    },
    {
        id: 17,
        question: "Что будет результатом выполнения данного кода?",
        questionImg: question_17,
        variants: ["5", "6", "Ошибка"],
        answer: 0,
        type: "code",
        category: "",
        weight: 1,
        explanation: `
            x++ - постфиксная запись, прибавление единицы осуществляется после вызова.
        `,
        code: `
                let x = 5;
                console.log(x++);
        `,
    },
    {
        id: 18,
        question: "Что будет результатом выполнения данного кода?",
        questionImg: question_18,
        variants: ["20", "undefined", "Ошибка"],
        answer: 1,
        type: "code",
        category: "",
        weight: 1,
        explanation: `
            Несмотря на значения по умолчанию, мы инициализируем массив, который передаётся в фунцию - в её аргументе нету второго элемента массива.
        `,
        code: `
            function getSecondValue([first, second] = [10, 20]) {
                return second;
            }
            
            console.log(getSecondValue([5]));
        `,
    },
    {
        id: 19,
        question: "Что будет результатом выполнения данного кода?",
        questionImg: question_19,
        variants: [
            "Hello, Vasya. You're 10",
            "Hello, Vasya. You're undefined",
            "Hello, undefined. You're undefined",
            "Ошибка",
        ],
        answer: 2,
        type: "code",
        category: "",
        weight: 1,
        explanation: `
            'Vasya' и 10 передаются как массив аргументов в функцию
        `,
        code: [
            "function greetings({name, age}) {",
            "    console.log(`Hello, ${name}. You're ${age}`);",
            "}",
            "/n",
            "greetings('Vasya', 10);",
        ],
    },
    {
        id: 20,
        question: "Что будет результатом выполнения данного кода?",
        questionImg: question_20,
        variants: ["Some message4", "Some message", "Ошибка", "true"],
        answer: 2,
        type: "code",
        category: "",
        weight: 2,
        explanation: `
            'apply' работает с массивом аргументов.
            При использовании 'call' результат будет "Some message4"
        `,
        code: `
            const details = {
                message: 'Some message'
            }
            
            function getMessage(count) {
                return this.message + count;
            }
            
            console.log(getMessage.apply(details, 4));
        `,
    },
    {
        id: 21,
        question: "Что будет результатом выполнения данного кода?",
        questionImg: question_21,
        variants: ["5", "6", "3"],
        answer: 0,
        type: "code",
        category: "",
        weight: 1,
        explanation: `
            При присвоении несуществующим элементам массива значений, появятся элементы с этими индексами,
            а неинициализированные элементы будут равны 'undefined'
        `,
        code: `
            const arr = [1];
            arr[2] = 2;
            arr[5] = 5;
        `,
    },
    {
        id: 22,
        question: "Что будет результатом выполнения данного кода?",
        questionImg: question_22,
        variants: [
            "[1, 2, 3]",
            "[1, 2]",
            "[1, 2, 3, 4, 5]",
            "Так делать нельзя",
        ],
        answer: 1,
        type: "code",
        category: "",
        weight: 1,
        explanation: `
            Можно изменять длинну массива - тогда количество элементов массива увеличится/сократится до указанного.
        `,
        code: `
            const arr = [1, 2, 3, 4, 5];
            arr.length = 2;
        `,
    },
    {
        id: 23,
        question: "Что будет результатом выполнения данного кода?",
        questionImg: question_23,
        variants: ["5 5", "5 undefined", "undefined 5", "undefined undefined"],
        answer: 1,
        type: "code",
        category: "",
        weight: 2,
        explanation: `
            
        `,
        code: `
            const arr = [1, 2, 3];
            const myString = 'my super string';

            arr.something = 5;
            myString.something = 5;

            console.log(arr.something);
            console.log(myString.something);
        `,
    },
    {
        id: 24,
        question: "Что будет результатом выполнения данного кода?",
        questionImg: question_24,
        variants: ["Maria", "Kolya", "undefined", "Ошибка"],
        answer: 0,
        type: "code",
        category: "",
        weight: 2,
        explanation: `
            
        `,
        code: `
            let name = 'Maria';

            const sayName = () => {
                console.log(name);
            }

            setTimeout(() => {
                let name = 'Kolya';
                sayName();
            }, 1000)
        `,
    },
    {
        id: 25,
        question: "Что будет результатом выполнения данного кода?",
        questionImg: question_25,
        variants: [
            "https://base-url/image/path",
            "https://image-url/image/path",
            "https://image-url-number-2/image/path",
        ],
        answer: 1,
        type: "code",
        category: "",
        weight: 2,
        explanation: `
            
        `,
        code: [
            "const baseURL = 'https://base-url';",
            "\n",
            "const buildImagePath = () => {",
            "    const baseURL = 'https://image-url';",
            "\n",
            "    return (url) => {",
            "        return `${baseURL}${url}`;",
            "    }",
            "}",
            "\n",
            "const getImage = (url) => {",
            "    const baseURL = 'https://image-url-number-2';",
            "    return buildImagePath()(url);",
            "}",
            "\n",
            "console.log(getImage('/image/path'));",
        ],
    },
    {
        id: 26,
        question: "Что будет результатом выполнения данного кода?",
        questionImg: question_26,
        variants: ["0", "6", "3", "undefined","Ошибка"],
        answer: 0,
        type: "code",
        category: "",
        weight: 3,
        explanation: `
            Стрелочная функция не имеет своего this - будет использоваться внешний.
            При использовании обычной функции ("function getSum() {}") - будет ошибка.
        `,
        code: `
            const data = {
                result: 0,
                numbers: [1, 2, 3],
                computeResult() {
                    const getSum = () => {
                        return this.numbers.reduce((total, value) => total + value, 0)
                    }
                    
                    this.result = getSum();
                }
            }

            data.computeResults();
            console.log(data.result);
        `,
    },
    {
        id: 27,
        question: "Что будет результатом выполнения данного кода?",
        questionImg: question_27,
        variants: [
            "5, 1, 3, 4, 2", 
            "1, 2, 3, 4, 5", 
            "5, 3, 4, 1, 2", 
            "5, 3, 1, 4, 2",
        ],
        answer: 3,
        type: "code",
        category: "",
        weight: 3,
        explanation: `
            1) Выполняется "console.log('5')" => 5
            2) Выполняется "firstFuncton => myPromise().resolve()", запускается ожидание console.log("1")
            3) Выполняется "secondFunction => await" => 3
            4) Выполняется "firstFunction => console.log('1')" => 1
            5) Выполняется "secondFunction => console.log('4')" => 4
            6) Выполняется "firstFunction => setTimeout()" => 2
            5 3 1 4 2
        `,
        code: `
            const myPromise = () => Promise.resolve().then(() => console.log('1'));

            const firstFunction = () => {
                setTimeout(() => console.log('2'), 0);
                myPromise();
            }

            async function secondFunction() {
                await new Promise((resolve) => {
                    console.log('3');
                    resolve();
                })

                console.log('4');
            }

            console.log('5');
            firstFunction();
            secondFunction();
        `,
    },
];

// {
//     id: 23,
//     question: "Что будет результатом выполнения данного кода?",
//     questionImg: question_23,
//     variants: [
//         "00000",
//         "11111",
//         "22222",
//         "33333",
//         "44444",
//     ],
//     answer: 0,
//     type: "code",
//     category: "",
//     weight: 2,
//     explanation: `

//     `,
//     code: `
//     `,
// },

export { ARR_CHECK };
