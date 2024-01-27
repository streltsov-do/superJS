import { Checkbox, CheckboxProps, Col, Form, Row } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import Title from "antd/es/typography/Title";
import { useState } from "react";
import {
    FILTER_CATEGORY,
    FILTER_SOURCE,
    FILTER_TYPE,
    QuestionCategory,
    QuestionType,
} from "../../types/commonTypes";

const formItemLayout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
};

interface propsType {
    setCategory: (newCategory: QuestionCategory[]) => void;
    setType: (newCategory: QuestionType[]) => void;
}

export const TestStart = (props: propsType) => {
    const { setCategory, setType } = props;

    const [checkedFilterCategory, setCheckedFilterCategory] =
        useState<CheckboxValueType[]>(FILTER_CATEGORY);

    const [checkedFilterType, setCheckedFilterType] =
        useState<CheckboxValueType[]>(FILTER_TYPE);

    const checkedAllFilterCategory =
        FILTER_CATEGORY.length === checkedFilterCategory.length;
    const indeterminateFilterCategory =
        checkedFilterCategory.length > 0 &&
        checkedFilterCategory.length < FILTER_CATEGORY.length;

    const onChangeFilterCategory = (list: CheckboxValueType[]) => {
        setCheckedFilterCategory(list);

        const newCategory = list as QuestionCategory[];
        setCategory(newCategory);
    };

    const onChangeAllFilterCategory: CheckboxProps["onChange"] = (e) => {
        setCheckedFilterCategory(e.target.checked ? FILTER_CATEGORY : []);
    };

    const checkedAllFilterType =
        FILTER_TYPE.length === checkedFilterType.length;

    const indeterminateFilterType =
        checkedFilterType.length > 0 &&
        checkedFilterType.length < FILTER_TYPE.length;

    const onChangeFilterType = (list: CheckboxValueType[]) => {
        setCheckedFilterType(list);
        const newType = list as QuestionType[];

        setType(newType);
    };

    const onChangeAllFilterType: CheckboxProps["onChange"] = (e) => {
        setCheckedFilterType(e.target.checked ? FILTER_TYPE : []);
    };

    return (
        <Form size="small" {...formItemLayout}>
            <Title level={2}>Тестирование</Title>
            <Form.Item label="Категории" name="category">
                <Col>
                    <Row>
                        <Checkbox
                            indeterminate={indeterminateFilterCategory}
                            checked={checkedAllFilterCategory}
                            onChange={onChangeAllFilterCategory}
                        >
                            Все
                        </Checkbox>
                    </Row>
                    <Row>
                        <Checkbox.Group
                            onChange={onChangeFilterCategory}
                            options={FILTER_CATEGORY}
                            value={checkedFilterCategory}
                        />
                    </Row>
                </Col>
            </Form.Item>

            <Form.Item label="Типы заданий" name="type">
                <Col>
                    <Row>
                        <Checkbox
                            indeterminate={indeterminateFilterType}
                            checked={checkedAllFilterType}
                            onChange={onChangeAllFilterType}
                        >
                            Все
                        </Checkbox>
                    </Row>
                    <Row>
                        <Checkbox.Group
                            onChange={onChangeFilterType}
                            options={FILTER_TYPE}
                            value={checkedFilterType}
                        />
                    </Row>
                </Col>
            </Form.Item>
        </Form>
    );
};
