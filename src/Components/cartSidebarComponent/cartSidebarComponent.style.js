import styled from "styled-components";

export const div = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    opacity: ${(props) => (props.show ? "1" : "0")};
    visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;

export const sidebar = styled.div`
    width: 300px;
    height: 100%;
    background-color: #fff;
    position: absolute;
    right: ${(props) => (props.show ? "0" : "-100px")};
    top: 0;
    transition: all 0.3s ease;
    padding: 1rem;
    opacity: ${(props) => (props.show ? "1" : "0")};
    visibility: ${(props) => (props.show ? "visible" : "hidden")};

    svg {
        cursor: pointer;
    }
`;
