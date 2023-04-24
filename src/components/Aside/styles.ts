import styled from "styled-components"

export const Container = styled.div`
    grid-area: AS;

    border-right: 1px solid ${props => props.theme.colors.gray};
    background-color: ${props => props.theme.colors.secondary};
    padding: 0 10px;
`
export const Header = styled.header`
    display: flex;
    align-items: center;
    height: 70px;
`

export const LogoImg = styled.img`
    width: 40px;
    height: 40px;
`

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;
`

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 50px;
`

export const MenuItemLink = styled.a`
    color: ${props => props.theme.colors.info};

    display: flex;
    align-items: center;
    gap: 10px;

    padding: 0 20px;
    text-decoration: none;
    transition: opacity 0.3s;

    &:hover {
        opacity: 0.7
    }

    > svg {
        font-size: 1.2rem;
    }
`