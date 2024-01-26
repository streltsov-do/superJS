import React from "react";

const getLink = (name: string, link: string) => {
    return (
        <a href={link} target={"_blank"} rel="noreferrer">
            {name}
        </a>
    );
};

////////////////////////////////////////////////////////////////
export const tableDataCollections = [
    {
        title: "Сравнение Object / Array / Map / Set",
        children: [
            {
                key: "index",
                title: "#",
                dataIndex: "index",
            },
            {
                key: "param",
                title: "Параметр",
                dataIndex: "param",
                align: "center",
            },
            {
                key: "object",
                title: "Object",
                dataIndex: "object",
            },
            {
                key: "array",
                title: "Array",
                dataIndex: "array",
            },
            {
                key: "map",
                title: "Map",
                dataIndex: "map",
            },
            {
                key: "set",
                title: "Set",
                dataIndex: "set",
            },
        ],
    },
];

export const tableColumnsCollections = [
    {
        key: "1",
        index: "1",
        param: <i>Определение</i>,
        object: "Ассоциативные массивы с рядом дополнительных возможностей",
        array: "Структура данных для хранения упорядоченных коллекций",
        map: "Коллекция ключ/значение",
        set: "«Множество» значений, каждое значение может появляться только один раз",
    },
    {
        key: "2",
        index: "2",
        param: <i>Тип ключа</i>,
        object: "Только string",
        array: "Number",
        map: "Любой (в том числе - объект)",
        set: "Нет ключей",
    },
    {
        key: "3",
        index: "3",
        param: <i>Количество элементов</i>,
        object: "нет",
        array: "метод .length",
        map: "метод .size",
        set: "метод .size",
    },
    {
        key: "4",
        index: "4",
        param: <i>Перебор элементов</i>,
        object: "for..in",
        array: "for / for..of / forEach",
        map: "for.. of",
        set: "for..of / forEach",
    },
    {
        key: 5,
        index: "5",
        param: <i>Ссылка</i>,
        object: getLink(
            "Object",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",
        ),
        array: getLink(
            "Array",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
        ),
        map: getLink(
            "Map",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",
        ),
        set: getLink(
            "Set",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set",
        ),
    },
];
////////////////////////////////////////////////////////////////
export const tableColumnsArrayMethods = [
    {
        title: "Сравнение for / forEach / map",
        children: [
            {
                key: "index",
                title: "#",
                dataIndex: "index",
            },
            {
                key: "param",
                title: <i>Параметр</i>,
                dataIndex: "param",
                align: "center",
            },
            {
                key: "for",
                title: "for",
                dataIndex: "for",
            },
            {
                key: "forof",
                title: "for..of",
                dataIndex: "forof",
            },
            {
                key: "forin",
                title: "for..in",
                dataIndex: "forin",
            },
            {
                key: "foreach",
                title: "Array.forEach",
                dataIndex: "foreach",
            },
            {
                key: "map",
                title: "Array.map",
                dataIndex: "map",
            },
        ],
    },
];

interface IntColumnsArrayChildren {
    key: React.Key;
    index: string;
    param: JSX.Element | string;
    for: JSX.Element | string;
    forof: JSX.Element | string;
    forin: JSX.Element | string;
    foreach: JSX.Element | string;
    map: JSX.Element | string;
}

export const tableDataArrayMethods: IntColumnsArrayChildren[] = [
    {
        key: 1,
        index: "1",
        param: <i>Применение</i>,
        for: "Цикл с указанным количеством итераций",
        forof: "Обход итерируемых объектов",
        forin: "Обход перечисляемых свойств объекта (с проходом по цепочке прототипов)",
        foreach: (
            <div>
                Выполнение указанной функции один раз для каждого элемента
                массива
            </div>
        ),
        map: (
            <div>
                Выполнение указанной функции один раз для каждого элемента
                массива с возвращением нового массива
            </div>
        ),
    },
    {
        key: "2",
        index: "2",
        param: <i>Обход массива/объекта</i>,
        for: (
            <div>
                С указанным шагом
                <br />
                до указанного индекса
            </div>
        ),
        forof: (
            <div>
                По каждому элементу
                <br />в соответствии
                <br />с установленным порядком
            </div>
        ),
        forin: (
            <div>
                По каждому элементу
                <br />в произвольном порядке
            </div>
        ),
        foreach: "По каждому элементу",
        map: "По каждому элементу",
    },
    {
        key: "3",
        index: "3",
        param: <i>Параметры прохода</i>,
        for: "Индекс",
        forof: "Свойство",
        forin: "Свойство",
        foreach: "Значение, индекс, массив",
        map: "Значение, индекс, массив",
    },
    {
        key: "4",
        index: "4",
        param: <i>Возвращаемое значение</i>,
        for: "Любое",
        forof: "Любое",
        forin: "Любое",
        foreach: "undefined",
        map: "Новый массив",
    },
    {
        key: "5",
        index: "5",
        param: <i>Влияние на исходный массив</i>,
        for: "Любое",
        forof: "Любое",
        forin: "Любое",
        foreach: "Изменение",
        map: "Никакое",
    },
    {
        key: "6",
        index: "6",
        param: (
            <i>
                Возможность прерывания
                <br />
                (break)
            </i>
        ),
        for: "Есть",
        forof: "Есть",
        forin: "Есть",
        foreach: "Нет",
        map: "Нет",
    },
    {
        key: "10",
        index: "10",
        param: <i>Ссылка</i>,
        for: getLink(
            "for",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for",
        ),
        forof: getLink(
            "for..of",
            "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for...of",
        ),
        forin: getLink(
            "for..in",
            "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for...in",
        ),
        foreach: getLink(
            "forEach",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach",
        ),
        map: getLink(
            "Map",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map",
        ),
    },
];
