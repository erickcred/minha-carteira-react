import { createGlobalStyle } from 'styled-components'

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

export default StylesDefault
