import styled from "styled-components";
import { color } from "../../style";

export const Container = styled.div`
    margin-top: 132px;
`

export const Slider = styled.div`
    display: flex;
    transition: transform 0.5s ease-in-out;
`

export const Slide = styled.div`
    display: flex;
    flex: 0 0 100%;
    padding: 0 160px 0 0;

    img {
        min-width: 55%;
        position: relative;
        z-index: -1;
        background-repeat: no-repeat;
    }
`

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 24px;

    .title {
        > span {
            display: block;
            height: 90px;
            font-family: 'Oswald', sans-serif;
            font-size: 88px;
            color: ${color.accent};
        }
    }

    p {
        bottom: 0;
        font-size: 24px;
        margin-top: 16px;
        margin-bottom: 24px;
        font-weight: 400;
        
        > span {
            font-size: 20px;
            font-weight: 300;
        }
    }
`

export const Button = styled.button`
    position: absolute;
    transform: translateY(-300%);
    right: 240px;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;

    &:last-child {
        right: 160px;
    }
`