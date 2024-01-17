import { Tag } from "antd";
import {
    CAT_CSS,
    CAT_HTML,
    CAT_JS,
    CAT_TS,
    QuestionCategory,
} from "../../types/commonTypes";

interface IntTagUnit {
    category: QuestionCategory;
}

const TagUnit = (props: IntTagUnit) => {
    const { category } = props;
    const color = (function getColor() {
        switch (category) {
            case CAT_HTML:
                return "red";
            case CAT_JS:
                return "purple";
            case CAT_TS:
                return "blue";
            case CAT_CSS:
                return "green";
            default:
                return "gray";
        }
    })();

    return <Tag color={color}>{category}</Tag>;
};

export { TagUnit };
