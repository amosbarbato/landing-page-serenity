import { createGlobalStyle } from "styled-components"

export const color = {
    text: "#1F2326",
    accent: "#70C2CC",
    main: "#FAFAFA",
}

const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Noto Sans', sans-serif;
    }

    body {
        background-color: ${color.main};
        color: ${color.text};
    }

    .container {
        margin: 0 160px;
    }

    a {
        text-decoration: none;
        color: ${color.text};
    }

    .opn {
        font-family: 'Open Sans', sans-serif;
    }






    // fonts styles
    h1 {
        font-size: 52px;
        font-weight: 700;
        line-height: 64px;
    }
    h2 {
        font-size: 40px;
        font-weight: 700;
        line-height: 50px;
    }
    h3 {
        font-size: 32px;
        font-weight: 700;
    }
    h4 {
        font-size: 24px;
        font-weight: 600;
        line-height: 32px;
    }
    h5 {
        font-size: 20px;
        font-weight: 600;
        line-height: 32px;
    }
    h6 {
        font-size: 16px;
        font-weight: 600;
        line-height: 32px;
    }

`

export default Global