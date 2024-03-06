import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 160px;
    height: 698px;

    > div {
        width: 50%;
    }

    .caption {
        padding-top: 220px;
        h1 {
            font-size: 3.5rem;
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
    }
`

export const Hero = styled.div`
    img {
        width: 100%;
        position: relative;
        margin: -54px auto;
        z-index: -1;
        background-repeat: no-repeat;
    }
`