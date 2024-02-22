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

`

export default Global