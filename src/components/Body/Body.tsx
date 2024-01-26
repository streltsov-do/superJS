import { Button, Modal } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { TestStart } from "../TestStart/TestStart";

export const Body = () => {
    const [modalTest, setModalTest] = useState(false);
    const [testStarted, setTestStarted] = useState(false);

    const showTestModal = (e: React.MouseEvent<HTMLElement>) => {
        setModalTest(true);
    };

    const navigate = useNavigate();

    const handleTestOk = () => {
        setModalTest(false);
        setTestStarted(true);
        navigate("/tests");
    };

    const handleTestCancel = () => {
        setModalTest(false);
    };

    return (
        <div className="body">
            <Header openTestModal={showTestModal} testStarted={testStarted} />

            <Modal
                open={modalTest}
                onOk={handleTestOk}
                onCancel={handleTestCancel}
                cancelText="Отмена"
                okText="Начать"
            >
                <TestStart />
            </Modal>

            <Main openTestModal={showTestModal} />

            <Footer />
        </div>
    );
};
