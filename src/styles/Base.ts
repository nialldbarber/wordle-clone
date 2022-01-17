import styled, { createGlobalStyle } from "styled-components"

export const BaseStyles = createGlobalStyle`
  html {
    width: 100%;
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: rgb(18, 18, 19);
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    height: 100%;
  }
`
