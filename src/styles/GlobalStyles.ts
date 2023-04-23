import styled, { createGlobalStyle } from 'styled-components'

const StylesDefault = createGlobalStyle`
    * {
        border: 0;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Roboto", sans-serif;
    }

    html, body, #root {
        height: 100vh;
    }

    *, button, input {
        border: 0;
        outline: 0;
    }

    button {
        cursor: pointer;
    }
`

export const ContainerDefault = styled.div`
    max-width: 1366px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 1024px) {
        width: 90%;
    }
`

export default StylesDefault
