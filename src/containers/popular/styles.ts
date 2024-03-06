import styled from "styled-components";


export const Container = styled.div`
    margin-top: 132px;


    h2 {
        text-align: center;
        margin-bottom: 42px;
    }
`

export const TabContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 9fr;
`

export const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 38px;
    grid-row-gap: 50px;
`

export const TabsHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 32px 20px 32px 0;
    border-right: 1px solid rgba(0,0,0,0.4);
`