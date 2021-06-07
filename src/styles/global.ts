import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #F0F2F5;
    --red: #E52E4D;
    --blue-light: #41d3be;
    --violet: #7C3AED;
    --green: #10B981;
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
        font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
        font-size: 87.5%; // 14px
    }
}

body {
    background: var(--background);
}

body, input, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

button {
    cursor: pointer;
}
`;