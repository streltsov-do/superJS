import { Space, Table } from "antd";
import React from "react";
import {
    tableColumnsArrayMethods,
    tableColumnsCollections,
    tableDataArrayMethods,
    tableDataCollections,
} from "./constants";

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
