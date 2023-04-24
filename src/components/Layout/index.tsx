import { ReactNode } from 'react'

import MainHeader from '../MainHeader'
import Content from '../Content'
import Aside from '../Aside'

import GridContainer from './styles'

interface Props {
    children?: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <GridContainer>
            <MainHeader />
            <Aside />
            <Content>
                {children}
            </Content>
        </GridContainer>
    )
}

export default Layout