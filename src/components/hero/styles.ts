import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: space-between;

`

export const Details = styled.div`
    width: 55%;
    padding: 220px 58px 0 0;

    h1 {
        font-size: 56px;
    }

    p {
        font-size: 16px;
        margin-top: 16px;
        margin-bottom: 56px;
        font-weight: 100;
    }

    .link {
        margin-left: 56px;
        text-decoration: underline;
    }
`

export const Hero = styled.div`
    width: 45%;

    img {
        width: 135%;
        position: relative;
        margin: -54px auto;
        z-index: -1;
        background-repeat: no-repeat;
    }
`