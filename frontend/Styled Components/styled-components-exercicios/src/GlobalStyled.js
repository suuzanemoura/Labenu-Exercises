import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

*{ 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}
  
`;


export const Container = styled.div `
    height: 100vh;
    display: flex;
    flex-direction: column;
`