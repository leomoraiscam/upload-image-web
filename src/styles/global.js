import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background:#7159c1;
    font-size: 14px;
    font-family: sans-serif;
    text-rendering:optimizeLegibility;
    -webkit-font-smoothing: antialiased; 
  }

  html, body, #root{
    height: 100%;
  }
`;
