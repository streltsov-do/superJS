import {
    IntTestUnit,
    CAT_HTML,
    CAT_JS,
    TYPE_CODE,
    TYPE_THEORY,
    SOURCE_HH,
    SOURCE_AMO,
} from "../../types/commonTypes";

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
import question_28 from "./img/question_28.jpg";
import question_31 from "./img/question_31.jpg";
import question_34 from "./img/question_34.jpg";
import question_36 from "./img/question_36.jpg";
import question_38 from "./img/question_38.jpg";
import question_40 from "./img/question_40.jpg";
import question_41 from "./img/question_41.jpg";
import question_42 from "./img/question_42.jpg";
import question_47 from "./img/question_47.jpg";

import answer_15 from "./img/answer_15.jpg";
import answer_40 from "./img/answer_40.jpg";
import answer_41 from "./img/answer_41.jpg";
import answer_43 from "./img/answer_43.jpg";

const ARR_CHECK: IntTestUnit[] = [
    {
        id: 0,
        source: SOURCE_AMO,
        category: CAT_JS,
        type: TYPE_THEORY,
        theme: "",
        weight: 1,
        question: "Что такое DOM?",
        variants: [
            "Браузерный движок",
            "Объектная модель документа",
            "Механизм для работы с XML-документами",
        ],
        answer: 1,
        explanation: `
            Объектная Модель Документа (DOM) – это программный интерфейс (API) для HTML и XML документов. DOM предоставляет структурированное представление документа и определяет то, как эта структура может быть доступна из программ, которые могут изменять содержимое, стиль и структуру документа. Представление DOM состоит из структурированной группы узлов и объектов, которые имеют свойства и методы. По существу, DOM соединяет веб-страницу с языками описания сценариев либо языками программирования.
        `,
    },
    {
        id: 1,
        source: SOURCE_AMO,
        category: CAT_JS,
        type: TYPE_THEORY,
        theme: "",
        weight: 1,
        question:
            "Какие виды областей видимости есть в JS (ES6+)? (Несколько вариантов ответов)",
        variants: ["Модульная", "Глобальная", "Функциональная", "Блочная"],
        answer: [0, 1, 2, 3],
        explanation: `
            1) Видимость в пределах модуля может существовать в модульных программах, состоящих из нескольких отдельных фрагментов кода, обычно находящихся в разных файлах.
            2) Глобальная область видимости — идентификатор доступен во всём тексте программы.
            3) Локальная область видимости (функциональная) — идентификатор доступен только внутри определённой функции (процедуры).
            4) Блочная область видимости — это зона видимости переменных, объявленных внутри блока кода. 
        `,
    },
    {
        id: 2,
        type: TYPE_THEORY,
        source: SOURCE_AMO,
        category: CAT_JS,
        theme: "",
        weight: 1,
        question:
            "Какие значения в JS являются ложными (falsy)? (Несколько вариантов ответов)",
        variants: ['""', "[]", "0", "null"],
        answer: [0, 2, 3],
        explanation: `
            Полный список ложный значений:
            false - Ключевое слово false.
            0 - Ноль Number (к нему также относятся 0.0, 0x0 и т.д.).
            -0 - Отрицательный ноль типа Number (к нему также относятся -0.0, -0x0 и т.д.).
            "", '', \`\` - Значение, содержащее пустую строку .
            null - null — отсутствие какого-либо значения.
            undefined - undefined — примитивное значение.
            NaN (en-US) - NaN — значение, не являющиеся числом.
            
            0n - Ноль типа BigInt (также 0x0n). Обратите внимание, что не может быть негативного нуля типа BigInt — отрицательный 0n равняется 0n.
            document.all - Объекты считаются ложноподобными тогда и только тогда, когда у них есть внутренний слот [[IsHTMLDDA]]. Этот слот есть только в объекте document.all, и его нельзя задать через JavaScript.
        `,
    },
    {
        id: 3,
        type: TYPE_THEORY,
        source: SOURCE_AMO,
        category: CAT_JS,
        theme: "",
        weight: 1,
        question: 'Что делает оператор "!!"',
        variants: [
            "Инвертирует без приведения типов",
            "Определяет выражение, которое должно быть вычислено без возвращения результата",
            "Приводит к булевому типу",
            "Такого оператора не существует",
        ],
        answer: 2,
        explanation: `
            Можно один за другим использовать пару операторов НЕ, чтобы явным образом принудительно преобразовать любое значение в соответствующий булевый примитив.
        `,
    },
    {
        id: 4,
        type: TYPE_THEORY,
        source: SOURCE_AMO,
        category: CAT_JS,
        theme: "",
        weight: 2,
        question:
            "В чем специфика стрелочных функций (arrow function) (Несколько вариантов ответов)",
        variants: [
            "нет собственного this",
            "Можно использовать только в виде callback",
            "Нет доступа к arguments",
            "Нельзя использовать как асинхронную функцию",
        ],
        answer: [0, 2],
        explanation: `
            An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

            Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
            Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
            Arrow functions cannot use yield within their body and cannot be created as generator functions.
        `,
    },
    {
        id: 5,
        source: SOURCE_AMO,
        category: CAT_JS,
        type: TYPE_THEORY,
        theme: "",
        weight: 2,
        question: "Какая арифметическая операция приведёт к ошибке",
        variants: [
            "Умножение числа на строку",
            "Корень из отрицательного числа",
            "Никакая из вышеперечисленных",
            "Всё из вышеперечисленных",
        ],
        answer: 2,
        explanation: `
            Обе указанные арифметические операции вернут NaN
        `,
    },
    {
        id: 6,
        source: SOURCE_AMO,
        category: CAT_JS,
        type: TYPE_THEORY,
        theme: "",
        question: "Сколько параметров можно передать функции",
        variants: [
            "Ровно столько, сколько указано в объявлении функции",
            "Ровно столько, сколько указано в объявлении функции или меньше",
            "Ровно столько, сколько указано в объявлении функции или больше",
            "Любое количество",
        ],
        answer: 3,
        weight: 1,
        explanation: `
        `,
    },
    {
        id: 7,
        source: SOURCE_AMO,
        category: CAT_JS,
        type: TYPE_THEORY,
        theme: "",
        weight: 1,
        question: "Что такое Promise?",
        variants: [
            "Конструкция для блокировки выполнения асинхронного запроса",
            "Способ работы с асинхронным кодом",
            "Механизм изменения контекста выполнения функции",
        ],
        answer: 1,
        explanation: `
            Объект Promise используется для отложенных и асинхронных вычислений.
        `,
    },

    {
        id: 8,
        source: SOURCE_AMO,
        category: CAT_JS,
        type: TYPE_THEORY,
        theme: "",
        weight: 1,
        question: "Для чего используется ключевое слово new?",
        variants: [
            "Создание нового потока выполнения",
            "Создание экземпляра класса",
            "Выход из цикла",
        ],
        answer: 1,
        explanation: `
            Оператор (операторная функция) new создаёт экземпляр объекта, встроенного или определённого пользователем, имеющего конструктор.
        `,
    },
    {
        id: 9,
        source: SOURCE_AMO,
        category: CAT_JS,
        type: TYPE_CODE,
        theme: "",
        weight: 1,
        question: "Что будет результатом выполнения данного кода?",
        questionImg: question_9,
        variants: ["true false", "null null", "42 null", "42 42"],
        answer: 2,
        explanation: `
            Логический оператор ИЛИ (||) (дизъюнкция) возвращает значение одного из операндов, поэтому если этот оператор используется с небулевыми значениями, он вернет небулевое значение.
            Логический оператор И (&&) (конъюнкция) вернёт значение первого ложноподобного операнда при вычислении, либо значение последнего операнда, если все операнды оказались истиноподобными.
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
        source: SOURCE_AMO,
        category: CAT_JS,
        type: TYPE_CODE,
        theme: "",
        weight: 1,
        question: "Что будет результатом выполнения данного кода?",
        questionImg: question_10,
        variants: ["logOr logAnd", "logOr", "logAnd", "Ошибка"],
        answer: 1,
        explanation: `
            0 || 1 - вернёт 1 => вывод logOr
            0 && 1 - вернёт 0 => logAnd не выведется
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
        source: SOURCE_AMO,
        category: CAT_JS,
        type: TYPE_CODE,
        theme: "",
        weight: 1,
        question: "Что будет результатом выполнения данного кода?",
        questionImg: question_11,
        variants: ["1", "2", "NaN", "undefined", "Ошибка"],
        answer: 1,
        explanation: `
            Сначала выполняется присваивание y=2, после x=y.
        `,
        code: `
            let y = 1;
            let x = y = 2;

            alert(x);
        `,
    },
    {
        id: 12,
        source: SOURCE_AMO,
        category: CAT_JS,
        type: TYPE_CODE,
        theme: "",
        question: "Что будет результатом выполнения данного кода?",
        questionImg: question_12,
        variants: [
            `Вывод "Hello"`,
            "Ошибка - нельзя вызвать функцию до её объявления",
        ],
        answer: 0,
        weight: 1,
        explanation: `
            Поднятие (Hoisting) переменных/функций: объявление переменной или функции физически перемещается в начало вашего кода. 
            На самом же деле, объявления переменных и функций попадают в память в процессе фазы компиляции, но остаются в коде на том месте, где вы их объявили.
            Стрелочные функции не поднимаются.
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
        source: SOURCE_AMO,
        category: CAT_JS,
        type: TYPE_CODE,
        theme: "",
        weight: 1,
        question: "Что будет результатом выполнения данного кода?",
        questionImg: question_13,
        variants: ["undefined", "10", "9", "Цикл не завершится", "Ошибка"],
        answer: 0,
        explanation: `
                i - блочная переменная (объявлена с помощью "let"). Вне цикла не определена - будет ошибка ReferenceError
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
        source: SOURCE_AMO,
        category: CAT_JS,
        type: TYPE_CODE,
        theme: "",
        weight: 1,
        question: "Что будет результатом выполнения данного кода?",
        questionImg: question_14,
        variants: ["false, false ", "false, true", "true, false", "true, true"],
        answer: 0,
        explanation: `
                Сравниваются ссылки на массив - не могут быть одинаковыми.
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
        source: SOURCE_AMO,
        category: CAT_JS,
        type: TYPE_CODE,
        theme: "",
        weight: 2,
        question: "Что будет результатом выполнения данного кода?",
        questionImg: question_15,
        variants: ["Ivan", "undefined", "Ошибка"],
        answer: 2,
        explanation: `
            При присвоении функции - копируется ссылка на функцию.
            При таком вызове функции - This ссылается на глобальный объект, в строгом режиме будет ошибка.
            (в нестрогом - undefined)
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
        source: SOURCE_AMO,
        category: CAT_JS,
        type: TYPE_CODE,
        theme: "",
        weight: 2,
        question: "Что будет результатом выполнения данного кода?",
        questionImg: question_16,
        variants: ["Ошибка", "12", "undefined"],
        answer: 0,
        explanation: `
            This ссылается на глобальный объект, в строгом режиме будет ошибка.
        `,
        code: `
            'use strict'

            let user = {
                age: '12',
                getAge() {
                    return this.age;
                }
            }

            console.log((user.notGetAge = userGetAge)());
        `,
    },
    {
        id: 17,
        source: SOURCE_AMO,
        category: CAT_JS,
        type: TYPE_CODE,
        theme: "",
        weight: 1,
        question: "Что будет результатом выполнения данного кода?",
        questionImg: question_17,
        variants: ["5", "6", "Ошибка"],
        answer: 0,
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
        source: SOURCE_AMO,
        category: CAT_JS,
        type: TYPE_CODE,
        theme: "",
        weight: 1,
        question: "Что будет результатом выполнения данного кода?",
        questionImg: question_18,
        variants: ["20", "undefined", "Ошибка"],
        answer: 1,
        explanation: `
            Несмотря на значения по умолчанию, в функцию мы передаём массив с одним элементом.
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
        source: SOURCE_AMO,
        category: CAT_JS,
        type: TYPE_CODE,
        theme: "",
        weight: 1,
        question: "Что будет результатом выполнения данного кода?",
        questionImg: question_19,
        variants: [
            /* 0 */ "Hello, Vasya. You're 10",
            /* 1 */ "Hello, Vasya. You're undefined",
            /* 2 */ "Hello, undefined. You're undefined",
            /* 3 */ "Ошибка",
        ],
        answer: 2,
        explanation: `
            Аргумент функции - объект. При передаче вместо объекта строки и числа - поля объекта будут undefined
        `,
        code: `
            function greetings({name, age}) {",
                console.log(\`Hello, \${name}. You're \${age}\`);",
            }",
            /n",
            greetings('Vasya', 10);
        `,
    },
    {
        id: 20,
        source: SOURCE_AMO,
        category: CAT_JS,
        type: TYPE_CODE,
        theme: "",
        weight: 2,
        question: "Что будет результатом выполнения данного кода?",
        questionImg: question_20,
        variants: ["Some message4", "Some message", "Ошибка", "true"],
        answer: 2,
        explanation: `
            Метод 'apply' работает с массивом аргументов => будет ошибка при вызове данного метода.
            При использовании метода 'call' результат будет "Some message4"
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
        source: SOURCE_AMO,
        category: CAT_JS,
        type: TYPE_CODE,
        theme: "",
        weight: 1,
        question: "Что будет результатом выполнения данного кода?",
        questionImg: question_21,
        variants: [/* 0 */ "5", /* 1 */ "6", /* 2 */ "3"],
        answer: 0,
        explanation: `
            При присвоении несуществующим элементам массива значений, появятся элементы с этими индексами, а неинициализированные элементы будут равны 'undefined'
        `,
        code: `
            const arr = [1];
            arr[2] = 2;
            arr[5] = 5;
        `,
    },
    {
        id: 22,
        source: SOURCE_AMO,
        category: CAT_JS,
        type: TYPE_CODE,
        theme: "",
        weight: 1,
        question: "Что будет результатом выполнения данного кода?",
        questionImg: question_22,
        variants: [
            /* 0 */ "[1, 2, 3]",
            /* 1 */ "[1, 2]",
            /* 2 */ "[1, 2, 3, 4, 5]",
            /* 3 */ "Так делать нельзя",
        ],
        answer: 1,
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
        source: SOURCE_AMO,
        category: CAT_JS,
        type: TYPE_CODE,
        theme: "",
        weight: 2,
        question: "Что будет результатом выполнения данного кода?",
        questionImg: question_23,
        variants: [
            /* 0 */ "5 5",
            /* 1 */ "5 undefined",
            /* 2 */ "undefined 5",
            /* 3 */ "undefined undefined",
        ],
        answer: 1,
        explanation: `
            string - примитивный тип в JS (Undefined, Null, Boolean, Number, BigInt, String, and Symbol).
            Непримитивный тип - Object.
            В примитивных типах нет свойств - свойство не будет добавлено.
            Тип Array - объект, ему можно добавить свойство.
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
        source: SOURCE_AMO,
        category: CAT_JS,
        type: TYPE_CODE,
        theme: "",
        weight: 2,
        question: "Что будет результатом выполнения данного кода?",
        questionImg: question_24,
        variants: ["Maria", "Kolya", "undefined", "Ошибка"],
        answer: 0,
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
        source: SOURCE_AMO,
        category: CAT_JS,
        type: TYPE_CODE,
        theme: "",
        weight: 2,
        question: "Что будет результатом выполнения данного кода?",
        questionImg: question_25,
        variants: [
            /* 0 */ "https://base-url/image/path",
            /* 1 */ "https://image-url/image/path",
            /* 2 */ "https://image-url-number-2/image/path",
        ],
        answer: 1,
        explanation: `
            Из-за затенения переменных, будет использоваться baseURL из самой внутренней фукнции - buildImagePath.
        `,
        code: 
        `
            const baseURL = 'https://base-url';
            
            const buildImagePath = () => {
                const baseURL = 'https://image-url';
                
                return (url) => {
                    return \`\${baseURL}\${url}\`;
                }",
            }
            
            const getImage = (url) => {
                const baseURL = 'https://image-url-number-2';
                return buildImagePath()(url);",
            }
            
            console.log(getImage('/image/path'));
        `,
    },
    {
        id: 26,
        source: SOURCE_AMO,
        category: CAT_JS,
        type: TYPE_CODE,
        theme: "",
        weight: 3,
        question: "Что будет результатом выполнения данного кода?",
        questionImg: question_26,
        variants: ["0", "6", "3", "undefined", "Ошибка"],
        answer: 0,
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
        source: SOURCE_AMO,
        category: CAT_JS,
        type: TYPE_CODE,
        theme: "",
        weight: 3,
        question: "Что будет результатом выполнения данного кода?",
        questionImg: question_27,
        variants: [
            /* 0 */ "5, 1, 3, 4, 2",
            /* 1 */ "1, 2, 3, 4, 5",
            /* 2 */ "5, 3, 4, 1, 2",
            /* 3 */ "5, 3, 1, 4, 2",
        ],
        answer: 3,
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
    {
        id: 28,
        source: SOURCE_HH,
        category: CAT_JS,
        type: TYPE_CODE,
        theme: "",
        question: "Что будет результатом выполнения данного кода?",
        questionImg: question_28,
        variants: [
            /* 0 */ `Ошибка`,
            /* 1 */ "14",
            /* 2 */ "10",
            /* 3 */ "12",
            /* 4 */ "7",
        ],
        answer: 4,
        weight: 1,
        explanation: `
            Метод массива 'concat' добавляет элементы массива 'y' к массиву 'x'.
            Первый элемент полученного массива не меняется и равен 2.
            Длина массива 'y' = 3.
            Ответ: 2*2 + 3 = 7;
        `,
        code: `
            const x = [1, 2, 3];
            const y = [4, 5, 6];
            
            console.log(x.concat(y)[1] * 2 + y.length);
        `,
    },
    {
        id: 29,
        source: SOURCE_HH,
        category: CAT_JS,
        type: TYPE_THEORY,
        theme: "",
        question:
            "Какое из следующих утверджений верно относительно типов данных и хранения данных в браузере?",
        variants: [
            /* 0 */ `Переменная в JavaScript может быть объявлена с использованием одного из ключевых слов: let или var`,
            /* 1 */ "sessionStorage сохраняет данные только в рамках текущего сеанса работы браузера и удаляет их после закрытия вкладки или окна",
            /* 2 */ "Куки (cookies) могут быть только на клиентской стороне и используются для хранения информации о состоянии пользователя. Они имеют ограничение по размеру в несколько мегабайтов и могут быть подписаны для обеспечения целостности данных",
            /* 3 */ "LocalStorage используется для хранения данных на клиентской стороне браузера без ограничения по сроку хранения",
            /* 4 */ "В JavaScript есть специальные типы данных для работы с датами и временем, такие как Date, Time и DateTime",
        ],
        answer: 3,
        weight: 1,
        explanation: `
            1) [неверно] В JavaScript существует три вида объявлений: var (глобальная переменная), let (локальная переменная), const (неизменяемая переменная - константа)
            2) [неверно] Данные в sessionStorage очищаются в момент окончания сессии текущий страницы. Сессия страницы остаётся активной все время пока окно браузера открыто и сохраняется между перезагрузками страниц. Открытие той же страницы в новом окне браузера или новой вкладке приводит к созданию новой сессии страницы. [!] Не удаляет после закрытия, а обновляет после переоткрытия
            3) [неверно] HTTP cookie (web cookie, куки браузера) - это небольшой фрагмент данных, который сервер отправляет браузеру пользователя. Браузер может сохранить этот фрагмент у себя и отправлять на сервер с каждым последующим запросом. Можно задать срок действия кук, а также срок их жизни, после которого куки не будут отправляться. Также можно указать ограничения на путь и домен, то есть указать, в течении какого времени и к какому сайту они будут отсылаться. Одно куки вмещает до 4kb данных, разрешается более 20 куки на сайт (зависит от браузера).
            4) [верно] Свойство localStorage позволяет получить доступ к Storage объекту. Данные,  находящихся в свойстве localStorage,не имеют ограничений по времени хранения и могут быть удалены только с помощью JavaScript.
            5) [неверно] Для работы с датой и временем в JavaScript используются объекты Date (а не специальные типы данных).
        `,
    },
    {
        id: 30,
        source: SOURCE_HH,
        category: CAT_JS,
        type: TYPE_CODE,
        theme: "",
        question: "Какое из следующий утверждений логически НЕВЕРНО?",
        // questionImg: question_30,
        variants: [
            /* 0 */ `'cat' !== "dog"`,
            /* 1 */ `5 >= '3'`,
            /* 2 */ `typeof null !== 'object'`,
            /* 3 */ `'apple' !== 'string1'`,
            /* 4 */ "7 < 11",
        ],
        answer: 2,
        weight: 1,
        explanation: `
            Тип null - объект (не "null" из соображений обратной совместимости)
        `,
        code: `
            'cat' !== "dog"
            5 >= '3'
            typeof null !== 'object'
            'apple' !== 'string1'
            7 < 11
        `,
    },
    {
        id: 31,
        source: SOURCE_HH,
        category: CAT_JS,
        type: TYPE_CODE,
        theme: "",
        question: "Каким будет результат выполнения данного кода?",
        questionImg: question_31,
        variants: [
            /* 0 */ `false`,
            /* 1 */ `ReferenceError: array2 is not defined`,
            /* 2 */ `true`,
            /* 3 */ `NaN`,
            /* 4 */ "undefined",
        ],
        answer: 0,
        weight: 1,
        explanation: `
            При таком сравнении массивов сравниваются не значения элементов массивов, а ссылки на эти массивы - они не могут быть равны при таком присвоении значений.
            При 'const array1 = [1, 2, 3]; const array2 = array1;' - ссылки будут равны.
        `,
        code: `
            const array1 = [1, 2, 3];
            const array2 = [1, 2, 3];

            console.log(array1 === array2);
        `,
    },
    {
        id: 32,
        source: SOURCE_HH,
        category: CAT_JS,
        type: TYPE_THEORY,
        theme: "",
        question: `
            Вам нужен оператор, который подойдёт для целей:
            - Выполнения различных действий в зависимости от условия
            - Быстрого переключения между условиями нескольких возможных значений
            - Сравнения строго по значению и типу
            
            Какой оператор лучше использовать?
        `,
        // questionImg: question_31,
        variants: [
            /* 0 */ `if-else`,
            /* 1 */ `while`,
            /* 2 */ `switch-case`,
            /* 3 */ `do-while`,
            /* 4 */ "for",
        ],
        answer: 2,
        weight: 1,
        explanation: `
            Инструкция switch сравнивает выражение со случаями, перечисленными внутри неё, а затем выполняет соответствующие инструкции.
            При поиске подходящего значения используется строгое сравнение.
        `,
    },
    {
        id: 33,
        source: SOURCE_HH,
        category: CAT_JS,
        type: TYPE_THEORY,
        theme: "",
        question: `Какую область видимости имеет функция, объявленная с использованием ключевого слова const в JavaScript?`,
        // questionImg: question_31,
        variants: [
            /* 0 */ `Область видимости блока`,
            /* 1 */ `Область видимости модуля`,
            /* 2 */ `Область видимости объекта`,
            /* 3 */ `Глобальная область видимости`,
            /* 4 */ "Область видимости функции",
        ],
        answer: 0,
        weight: 1,
        explanation: `
            Константы (const) подчиняются области видимости уровня блока так же, как переменные, объявленные с использованием ключевого слова let.
        `,
    },
    {
        id: 34,
        source: SOURCE_HH,
        category: CAT_JS,
        type: TYPE_CODE,
        theme: "",
        question: `Какой код необходимо подставить на место пропуска, чтобы в результате получился ответ [20, 40, 60, 80, 100]?`,
        questionImg: question_34,
        variants: [
            /* 0 */ `for (let i=0; i<array.length; i++)`,
            /* 1 */ `for (const i=0; i<array.length; i++)`,
            /* 2 */ `for (var i=0; i>array.length; i = i+1)`,
            /* 3 */ `for (let i=1; i>array.length; i++)`,
            /* 4 */ "for (var i=0; i<array.length; i++)",
        ],
        answer: 0,
        weight: 1,
        explanation: `
            5-ый вариант тоже подходит, но при объявлении переменной с помощью var - создаётся глобальная переменная, что не нужно.
        `,
        code: `
            const myArray = [10, 20, 30, 40, 50];

            function multipleByTwo(array){
                ___ {
                    array[i]*=2;
                }
            }
            
            multipleByTwo(myArray);
            console.log(myArray);
        `,
    },
    {
        id: 35,
        source: SOURCE_HH,
        category: CAT_JS,
        type: TYPE_THEORY,
        theme: "",
        question: `
            Вы разрабатываете систему учета продаж для магазина электроники на JavaScript
            Вам необходимо создать программу, которая будет отслеживать информацию о проданных товарах 
            и вычислять общую прибыль.

            Необходимые функциональности:
            - Создание места для хранения обобщенной информации о проданных товарах
            - Добавление новых записей о продажах в раздельные списки данных: о сумме продажи, количестве проданных единиц
            - Расчёт общей прибыли на основе данных о продажах: например, суммы стоимости всех проданных товаров;
            вывод двух списков всех проданных товаров и общей прибыли

            Проанализируйте техническое задание. Как вы организуете структуру данных для хранения информации о товарах?
        `,
        // questionImg: question_34,
        variants: [
            /* 0 */ `Использую массив объектов`,
            /* 1 */ `Использую глобальные переменные`,
            /* 2 */ `Буду хранить данные в виде строк`,
            /* 3 */ `Использую только объекты`,
            /* 4 */ "Использую вложенные массивы",
        ],
        answer: -2,
        weight: 1,
        explanation: `
            
        `,
    },
    {
        id: 36,
        source: SOURCE_HH,
        category: CAT_JS,
        type: TYPE_THEORY,
        theme: "",
        question: `Какую концепцию наследования в JavaScript демонстрирует код ниже?`,
        questionImg: question_36,
        variants: [
            /* 0 */ `Иерархическое наследование`,
            /* 1 */ `Множественное наследование`,
            /* 2 */ `Классическое наследование`,
            /* 3 */ `Функциональное наследование`,
            /* 4 */ "Прототипное наследование",
        ],
        answer: 4,
        weight: 1,
        explanation: `
            1) [неверно] В иерархическом наследовании один класс наследуется многими подклассами. (Классы B, C и D наследуют один и тот же класс A)
            2) [неверно] В множественном наследовании один класс расширяет несколько классов. (Класс С расширяет классы А и В)
            3) [неверно] Классическое наследование - childClass extends parentClass
            4) [неверно] Для функционального наследования конструктор потомка вызывает родителя в своём контексте через apply/call.
            5) [верно] Метод Object.create() создаёт новый объект с указанным прототипом и свойствами.
        `,
        code: `
            const vehicle = {
                getInfo: function() {
                    console.log(this.model + 'was made in ' + this.year);
                }
            };

            const myCar = Object.create(vehicle);
            myCar.model = 'BMW';
            myCar.year = 2010;
            myCar.getInfo();
        `,
    },
    {
        id: 37,
        source: SOURCE_HH,
        category: CAT_JS,
        type: TYPE_THEORY,
        theme: "",
        question: `Какой из вариантов ответа точно описывает особенности прототипного наследования в JavaScript?`,
        // questionImg: question_34,
        variants: [
            /* 0 */ `Прототипное наследование обеспечивает наследование только унаследованных свойств и методов прототипа объекта`,
            /* 1 */ `Прототипное наследование позволяет создавать копии объекта при помощи конструктора`,
            /* 2 */ `Прототипное наследование в JavaScript позволяет объекту наследовать свойства и методы другого объекта через функциональное ссылочное соответствие`,
            /* 3 */ `Прототипное наследование позволяет объекту наследовать свойства и методы другого объекта через прототипное ссылочное соответствие`,
            /* 4 */ "Прототипное наследование в JaveScript использует классы для определения наследования и передачи свойств и методов",
        ],
        answer: 3,
        weight: 1,
        explanation: `
            Каждый объект в JS имеет внутреннюю ссылку на другой объект, называемый его прототипом. У объекта-прототипа также есть свой собственный прототип и так далее до тех пор, пока цепочка не завершится объектом, у которого свойство prototype равно null.
        `,
    },
    {
        id: 38,
        source: SOURCE_HH,
        category: CAT_JS,
        type: TYPE_THEORY,
        theme: "",
        question: `Какое предназначение имеет замыкание в следующем коде`,
        questionImg: question_38,
        variants: [
            /* 0 */ `Функция greeting принимает аргумент и возвращает строку`,
            /* 1 */ `Функция greeting служит для создания объекта`,
            /* 2 */ `Функция sayHello сохраняет значение переменной message и может получить к ней доступ позже`,
            // /* 2 origin */ `Функция sayHello сохраняет значение переменной name и может получить к ней доступ позже`,
            /* 3 */ `Функция greeting создает новый объект, содержащий метод sayHello`,
            /* 4 */ `Функция sayHello выводит на экран строку, содержащую сообщение приветствия и имя`,
        ],
        answer: 2,
        weight: 1,
        explanation: `
        `,
        code: `
            function greeting(name) {
                const message = 'Hello, ';

                function sayHello() {
                    console.log(message + name);
                }

                return sayHello;
            }

            const helloJohn = greeting('John');
            helloJohn();
        `,
    },
    {
        id: 39,
        source: SOURCE_HH,
        category: CAT_JS,
        type: TYPE_THEORY,
        theme: "",
        question: `В каком из перечисленных случаев стоит использовать Promise?`,
        // questionImg: question_38,
        variants: [
            /* 0 */ `При определении функции`,
            /* 1 */ `При объявлении переменных`,
            /* 2 */ `Для работы с асинхронными операциями`,
            /* 3 */ `При исполнении цикла`,
            /* 4 */ `При создании условия ветвления (if-else)`,
        ],
        answer: 2,
        weight: 1,
        explanation: `Объект Promise используется для отложенных и асинхронных вычислений.`,
    },
    {
        id: 40,
        source: SOURCE_HH,
        category: CAT_HTML,
        type: TYPE_CODE,
        theme: "",
        question: `Какой код приведет к некорректному отображению цитирования?`,
        questionImg: question_40,
        variants: [
            /* 0 */ `<blockquote><p>"Я знаю, что ничего не знаю"</p><cite> Сократ </cite></blockquote>`,
            /* 1 */ `<blockquote><h3>Сократ</h3><p>"Я знаю, что ничего не знаю"</p></blockquote>`,
            /* 2 */ `<p><q>Я знаю, что ничего не знаю</q>, говорил Сократ</p>`,
            /* 3 */ `<figure><blockquote>Я знаю, что ничего не знаю</blockquote><figcaption>говорил Сократ</figcaption></figure>`,
            /* 4 */ `<q><blockquote>Я знаю, что ничего не знаю</blockquote><cite>говорил Сократ</cite></q>`,
        ],
        answer: 4,
        answerImg: answer_40,
        weight: 1,
        explanation: `Тэг <q> - однострочный комментарий, <blockquote> - многострочный`,
        code: `
            <blockquote>
                <p>"Я знаю, что ничего не знаю"</p>
                <cite> Сократ </cite>
            </blockquote>

            <blockquote>
                <h3>Сократ</h3>
                <p>"Я знаю, что ничего не знаю"</p>
            </blockquote>

            <p><q>Я знаю, что ничего не знаю</q>, говорил Сократ</p>

            <figure>
                <blockquote>Я знаю, что ничего не знаю</blockquote>
                <figcaption>говорил Сократ</figcaption>
            </figure>

            <q>
                <blockquote>Я знаю, что ничего не знаю</blockquote>
                <cite>говорил Сократ</cite>
            </q>
        `,
    },
    {
        id: 41,
        source: SOURCE_HH,
        category: CAT_HTML,
        type: TYPE_CODE,
        theme: "",
        question: `Какая ошибка присутствует в следующем коде?`,
        questionImg: question_41,
        variants: [
            /* 0 */ `У тегов <tr> отсутствует обязательный атрибут char`,
            /* 1 */ `Элемент <td colspan="2" class="error">Ячейка 3</td> лишний`,
            /* 2 */ `У тега <table> отсутствует обязательный атрибут border`,
            /* 3 */ `Отсутствует обязательная заголовочная ячейка таблицы <th>`,
            /* 4 */ `Элемент <td>Ячейка 4</td> лишний"`,
        ],
        answer: 4,
        answerImg: answer_41,
        weight: 1,
        explanation: `Элемент 'Ячейка 4' будет выступать за пределы таблицы из-за параметра colspan="2" в Ячейке 3`,
        code: `
            <table>
                <tr>
                    <td>Ячейка 1</td>
                    <td>Ячейка 2</td>
                </tr>
                <tr>
                    <td colspan="2" class="error">Ячейка 3</td>
                    <td>Ячейка 4</td>
                </tr>
            </table>
        `,
    },
    {
        id: 42,
        source: SOURCE_HH,
        category: CAT_HTML,
        type: TYPE_CODE,
        theme: "",
        question: `Что создаёт следующий код?`,
        questionImg: question_42,
        variants: [
            /* 0 */ `Поле ввода, где можно выбрать несколько из трех элементов списка, при этом "Яблоки" выбрать нельзя, а "Молоко" выбрано по умолчанию`,
            /* 1 */ `Текстовое поле ввода, где значения "Яблоки" и "Молоко" вбиты по умолчанию, при этом в поле "Яблоки" нельзя изменить текст`,
            /* 2 */ `Маркированный список из трех пунктов, при этом маркеры "Яблоки" и "Молоко" оформлены как пусток кружок и галочка, соответственно`,
            /* 3 */ `Поле ввода, где можно выбрать только один из трех элементов списка, при этом "Яблоки" и "Молоко" выбрать нельзя`,
            /* 4 */ `Обычный маркированный список из трех пунктов, при этом пункт "Яблоки" зачеркнут, а "Молоко" - выделен курсивом`,
        ],
        answer: 0,
        // answerImg: answer_41,
        weight: 1,
        explanation: `Элемент 'Ячейка 4' будет выступать за пределы таблицы изза параметра colspan="2" в Ячейке 3`,
        code: `
            <input type="checkbox" name="list" disabled><label>Яблоки</label> </br>
            <input type="checkbox" name="list" checked><label>Молоко</label> </br>
            <input type="checkbox" name="list"><label>Яйца</label> </br>
        `,
    },
    {
        id: 43,
        source: SOURCE_HH,
        category: CAT_HTML,
        type: TYPE_CODE,
        theme: "",
        question: `Какой код для добавления подписи к картинке является правильным?`,
        // questionImg: question_43,
        variants: [
            /* 0 */ `<figure><img src="imp.png" figcaption = "Подпись к картинке"></figure>`,
            /* 1 */ `<a><img src="imp.png" alt = "Подпись к картинке"></a>`,
            /* 2 */ `<figure><figcaption>Подпись к картинке</figcaption></figure>`,
            /* 3 */ `<figure><figcaption>Подпись к картинке</figcaption><img src = "img.png"></figure>`,
            /* 4 */ `<img src = "img.png"><figcaption>Подпись к картинке></figcaption></img>`,
        ],
        answer: 0,
        answerImg: answer_43,
        weight: 1,
        explanation: `HTML-элемент <figcaption> - элемент подписи иллюстрации? представляет собой подпись (заголовок) или легенду, описывающую остальную часть содержимого родительского элемента <figure>.`,
        code: `
            <figure><img src="imp.png" figcaption = "Подпись к картинке"></figure>
            <a><img src="imp.png" alt = "Подпись к картинке"></a>
            <figure><figcaption>Подпись к картинке</figcaption></figure>
            <figure><figcaption>Подпись к картинке</figcaption><img src = "img.png"></figure>
            <img src = "img.png"><figcaption>Подпись к картинке></figcaption></img>
        `,
    },
    {
        id: 44,
        source: SOURCE_HH,
        category: CAT_HTML,
        type: TYPE_THEORY,
        theme: "",
        question: `Какой элемент в общепринятой структуре HTML-документа НЕ является обязательным?`,
        // questionImg: question_43,
        variants: [
            /* 0 */ `<html>`,
            /* 1 */ `<title>`,
            /* 2 */ `<head>`,
            /* 3 */ `!DOCTYPE`,
            /* 4 */ `<h1>`,
        ],
        answer: 4,
        // answerImg: answer_43,
        weight: 1,
        explanation: `
            <html> представляет собой корень (элемент верхнего уровня) HTML-документа, поэтому его так же называют корневым элементом. Все другие элементы должны быть потомками этого элемента (должны находиться внутри него).
            <title> определяет заголовок документа, который отображается в заголовке окна браузера или на вкладке страницы.
            <head> содержит машиночитаемую информацию (metadata) о документе, например его заголовок, скрипты и страницы стилей.
            <!DOCTYPE html> - обязательная преамбула, расположенная в верхней части документа.
            <h1> - всего лишь заголовок самого верхнего уровня, не обязательно должен быть в документе
        `,
    },
    {
        id: 45,
        source: SOURCE_HH,
        category: CAT_HTML,
        type: TYPE_THEORY,
        theme: "",
        question: `Какой тег позволяет встроить стороннюю веб-страницу в HTML-документ?`,
        // questionImg: question_43,
        variants: [
            /* 0 */ `<frameset>`,
            /* 1 */ `<footer>`,
            /* 2 */ `<frame>`,
            /* 3 */ `<iframe>`,
            /* 4 */ `<a>`,
        ],
        answer: 3,
        // answerImg: answer_43,
        weight: 1,
        explanation: `
            <frameset> Определяет структуру фреймов на веб-странице. Фреймы разделяют окно браузера на отдельные области, расположенные вплотную друг к другу. В каждую из таких областей загружается самостоятельная веб-страница определяемая с помощью тега <frame>.
            <footer> представляет собой нижний колонтитул (футер, подвал) для своего ближайшего секционного контента или секционного корня.
            <frame> определяет свойства отдельного фрейма, на которые делится окно браузера.  В каждую из таких областей загружается самостоятельная веб-страница определяемая с помощью атрибута src.
            <iframe> создает плавающий фрейм, который находится внутри обычного документа, он позволяет загружать в область заданных размеров любые другие независимые документы.
            <a> определяет гиперссылку для перехода на определённое место на странице или на другую страницу в Интернете.
        `,
    },
    {
        id: 46,
        source: SOURCE_HH,
        category: CAT_HTML,
        type: TYPE_THEORY,
        theme: "",
        question: `Выберите вариант, в котором указаны ТОЛЬКО атрибуты тега <iframe>.`,
        // questionImg: question_43,
        variants: [
            /* 0 */ `height, name, src, scrolling`,
            /* 1 */ `allowfullscreen, style, min, max`,
            /* 2 */ `hspace, vspace, label, type`,
            /* 3 */ `align, sandbox, default, metadata`,
            /* 4 */ `style, scrolling, sandbox, pubdate`,
        ],
        answer: 0,
        // answerImg: answer_43,
        weight: 1,
        explanation: `
            1) all
            2) не аттрибуты <iframe>: min, max
            3) не аттрибуты <iframe>: hspace, vspace, label, type
            4) не аттрибуты <iframe>: default, metadata
            5) не аттрибуты <iframe>: style, pubdate
        `,
    },
    {
        id: 47,
        source: SOURCE_HH,
        category: CAT_HTML,
        type: TYPE_CODE,
        theme: "",
        question: `Что не так с этим списком?`,
        questionImg: question_47,
        variants: [
            /* 0 */ `Пропущен закрывающий тег в строке <li>Чай`,
            /* 1 */ `Нельзя вкладывать маркированный список внутрь нумерованного`,
            /* 2 */ `Нельзя вкладывать тег <p> внутрь списка <ol>`,
            /* 3 */ `В теге <ol> отсутствует обязательный атрибут type`,
            /* 4 */ `В теге <li> отсутствует обязательный атрибут value`,
        ],
        answer: 2,
        // answerImg: answer_43,
        weight: 1,
        explanation: `
            You can put p tags only inside of li tags, not as direct children of ul. 
            The W3C Recommendation expressly states:
                Lists are made up of sequences of list items defined by the LI element
        `,
        code: `
            <ol>
                <p>Напитки</p>
                <li>Кофе</li>
                <li>2</li>
                <li>Чай
                    <ul>
                        
                    </ul>
                </li>
            </ol>
        `,
    },
];

// {
//     id: 12,
//     category: CAT_JS,
//     type: TYPE_CODE,
//     theme: "",
//     question: "qqqqqqqqqqqqqqqqqq?",
//     questionImg: iiiiiiiiiiiiiiiiiiiii,
//     variants: [
//         `1111111`,
//         "2222222",
//     ],
//     answer: 0,
//     weight: 1,
//     explanation: `
//     `,
//     code: `
//     `,
// },

export { ARR_CHECK };
