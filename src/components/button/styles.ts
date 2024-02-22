import styled from "styled-components";
import { color } from "../../style";


export const ButtonContainer = styled.button`
    background-color: ${color.accent};
    outline: none;
    border: none;
    padding: 16px 34px;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`