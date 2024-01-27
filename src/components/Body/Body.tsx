import { Button, Modal } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { CHANGE } from "../../redux/sliceTest";
import {
    FILTER_CATEGORY,
    FILTER_SOURCE,
    FILTER_TYPE,
    QuestionCategory,
    QuestionFilter,
    QuestionType,
} from "../../types/commonTypes";
import { initStateTest, randomizeOrder } from "../../utils/functions";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { TestStart } from "../TestStart/TestStart";
import { ARR_CHECK } from "../TestUnit/constants";

export const Body = () => {
    const [modalTest, setModalTest] = useState(false);
    const [testStarted, setTestStarted] = useState(false);

    const [filterState, setFilterState] = useState<QuestionFilter>({
        Source: FILTER_SOURCE,
        Category: FILTER_CATEGORY,
        Type: FILTER_TYPE,
    });

    const showTestModal = (e: React.MouseEvent<HTMLElement>) => {
        setModalTest(true);
    };

    const dispatch = useAppDispatch();

    const setCategory = (newCategory: QuestionCategory[]) => {
        setFilterState((filterState) => ({
            ...filterState,
            Category: newCategory,
        }));
    };
    const setType = (newType: QuestionType[]) => {
        setFilterState((filterState) => ({
            ...filterState,
            Type: newType,
        }));
    };

    const updateTests = () => {
        let newTests =
            // develop.questionStrictOrder
            false ? ARR_CHECK : randomizeOrder(ARR_CHECK);
        // setTests(newTests);

        newTests = newTests.filter((elem) => {
            return filterState.Source.indexOf(elem.source) >= 0;
        });

        newTests = newTests.filter((elem) => {
            return filterState.Category.indexOf(elem.category) >= 0;
        });

        if (filterState.Type.length > 0) {
            newTests = newTests.filter((elem) => {
                return filterState.Type.indexOf(elem.type) >= 0;
            });
        }

        dispatch(CHANGE(initStateTest(newTests)));
    };

    const navigate = useNavigate();

    const handleTestOk = () => {
        setModalTest(false);
        updateTests();
        setTestStarted(true);
        navigate("/tests");
    };

    const handleTestCancel = () => {
        setModalTest(false);
    };

    return (
        <div className="body">
            <Header
                openTestModal={showTestModal}
                testStarted={testStarted}
                setTestStarted={setTestStarted}
            />

            <Modal
                open={modalTest}
                onOk={handleTestOk}
                onCancel={handleTestCancel}
                cancelText="Отмена"
                okText="Начать"
            >
                <TestStart setCategory={setCategory} setType={setType} />
            </Modal>

            <Main openTestModal={showTestModal} />

            <Footer />
        </div>
    );
};
