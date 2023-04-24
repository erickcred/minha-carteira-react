import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/GlobalStyles'
import Layout from './components/Layout'

import darkTheme from './styles/themes/dark'
import AppRoutes from './routes/app.routes'

interface Props {
    children?: ReactNode
}

const App: React.FC<Props> = ({ children }) =>  {
    return (
        <ThemeProvider theme={darkTheme}>
            <GlobalStyle />
            <Layout>
                <AppRoutes />
            </Layout>
        </ThemeProvider>
    )
}

export default App
