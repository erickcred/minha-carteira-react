import { ReactNode } from "react"

import { Container } from "./styles"

interface Props {
    children?: ReactNode
}

const Content: React.FC<Props> = ({ children }) => {
    return (
        <Container>
            { children }
        </Container>
    )
}

export default Content