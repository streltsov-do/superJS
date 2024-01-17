import { Space, Table } from "antd";
import React from "react";

const tableDataCollections = [
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

const tableColumnsCollections = [
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
        key: "5",
        index: "5",
        param: <i>Перебор элементов</i>,
        object: (
            <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"
                target={"_blank"}
                rel="noreferrer"
            >
                Object
            </a>
        ),
        array: (
            <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
                target={"_blank"}
                rel="noreferrer"
            >
                Array
            </a>
        ),
        map: (
            <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"
                target={"_blank"}
                rel="noreferrer"
            >
                Map
            </a>
        ),
        set: (
            <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set"
                target={"_blank"}
                rel="noreferrer"
            >
                Set
            </a>
        ),
    },
];

const tableColumnsArrayMethods = [
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
                title: "Параметр",
                dataIndex: "param",
                align: "center",
            },
            {
                key: "for",
                title: "for",
                dataIndex: "for",
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

const tableDataArrayMethods = [
    {
        key: "1",
        index: "1",
        param: <i>Проход массива</i>,
        for: "С указанным шагом до указанного индекса",
        foreach: "Для каждого элемента",
        map: "Для каждого элемента",
    },
    {
        key: "2",
        index: "2",
        param: <i>Возвращаемое значение</i>,
        for: "Любое",
        foreach: "Возвращает undefined",
        map: "Возвращает новый массив",
    },
    {
        key: "3",
        index: "3",
        param: <i>Влияние на исходный массив</i>,
        for: "Любое",
        foreach: "Изменяет текущий массив",
        map: "Возвращает новый массив",
    },
    {
        key: "4",
        index: "4",
        param: <i>Ссылка</i>,
        for: (
            <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for"
                target={"_blank"}
                rel="noreferrer"
            >
                for
            </a>
        ),
        foreach: (
            <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"
                target={"_blank"}
                rel="noreferrer"
            >
                Array.forEach
            </a>
        ),
        map: (
            <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"
                target={"_blank"}
                rel="noreferrer"
            >
                Array.map
            </a>
        ),
    },
];

const PageTheory = () => {
    return (
        <Space direction="vertical" size="middle">
            <Table
                columns={tableDataCollections}
                dataSource={tableColumnsCollections}
                pagination={false}
                bordered={true}
            />

            <Table
                columns={tableColumnsArrayMethods}
                dataSource={tableDataArrayMethods}
                pagination={false}
                bordered={true}
            />
        </Space>
    );
};

export { PageTheory };
