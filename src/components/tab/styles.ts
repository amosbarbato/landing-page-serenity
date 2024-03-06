import styled from "styled-components";
import { color } from "../../style";


export const TabButton = styled.button<{active: boolean}>`
    padding: 4px 14px;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: ${props => props.active ? color.accent : 'transparent'};
    text-align: right;
    font-size: 18px;
`