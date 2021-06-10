import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #F0F2F5;
    --blue-light: #41d3be;
    --violet: #7C3AED;
    --white: #FFFFFF;
    --gray-500: #6B7280;
    --gray-700: #374151;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media (max-width: 1080px) {
        font-size: 93.75%;
    }

    @media (max-width: 720px) {
        font-size: 87.5%;
    }
}

body {
    background: var(--background);
}

body, input, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
-webkit-appearance: none;
margin: 0; }

`;
