import styled from "styled-components";

export const div = styled.div`
    width: 95%;
    height: 400px;
    padding: 1rem;
    border-radius: 14px;
    box-shadow: 0 0 10px 1px #e1e1e1;
    margin-bottom: 1rem;
    text-align: center;

    img {
        max-width: 100%;
        height: 200px;
    }
`;

export const content = styled.div`
    margin: 1rem 0;
    h1 {
        font-size: 18px;
        font-weight: 400;
    }
    p {
        font-size: 14px;
        margin-top: 0.4rem;
    }

    h5 {
        margin-top: 0.8rem;
        font-size: 20px;
        font-weight: 400;
    }

    span {
        font-size: 13px;
        text-decoration: line-through;
    }
`;
