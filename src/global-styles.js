import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html, body, h1, h2 {
    font-family: 'Helvetica Neue', Helvetica, Trebuchet MS, Century Gothic, Candara, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #EBEBEB;
    color: #333333;
    font-size: 16px;
}
`;
