import styled from "styled-components";

export const Content = styled.div<{active: boolean}>`
    display: ${props => props.active ? 'block' : 'none'};
    padding: 16px 24px;
`