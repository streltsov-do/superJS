import styled from "styled-components/macro";

const Container = styled.div`
    padding-left: 20px;
`;

const Square = styled.div<{
    bgColor: string;
}>`
    width: 30px;
    height: 30px;
    background-color: ${(props) => props.bgColor};
`;

export { Container, Square };
