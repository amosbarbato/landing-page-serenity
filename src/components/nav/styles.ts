import styled from "styled-components";


export const Container = styled.div`
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    nav {
        display: flex;
        gap: 40px;

        li a {
            font-size: 16px;
            font-weight: 400;
        }
    }
`