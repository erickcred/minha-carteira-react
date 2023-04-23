import React from 'react'

import GlobalStyle, { ContainerDefault } from './styles/GlobalStyles'
import Dashboard from './pages/Dashboard'

const App: React.FC = () =>  {
    return (
        <>
            <GlobalStyle />
            <ContainerDefault>
                <Dashboard />
            </ContainerDefault>
        </>
    )
}

export default App
