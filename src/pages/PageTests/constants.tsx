export const tableColumns = [
    {
        key: "color",
        title: "Цвет",
        dataIndex: "color",
    },
    {
        key: "description",
        title: "Значение",
        dataIndex: "description",
    },
];

export const tableData = [
    {
        key: "1",
        name: "red",
        color: <div className="square square--red" />,
        description: "Неправильный ответ",
    },
    {
        key: "2",
        name: "yellow",
        color: <div className="square square--yellow" />,
        description: "Нет ответа",
    },
    {
        key: "3",
        name: "green",
        color: <div className="square square--green" />,
        description: "Правильный ответ",
    },
];
