import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #09090A;
        --white: #FFFFFF;
        --gray-600: #27272A;
        --gray-300: #DADADA54;
        --border: #9D4B00;
    }

    * {
        margin: 0;
        padding: 0;
    }

    body {
        background: var(--background);
    }

    body, textarea, button {
        font-family: 'Inter', sans-serif;
    }

    button {
        cursor: pointer;
    }
`