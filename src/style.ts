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
        color: ${color.main};
    }

    .container {
        max-width: 70%;
        margin: 0 auto;
    }

`

export default Global