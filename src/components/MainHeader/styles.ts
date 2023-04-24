import styled from "styled-components";

export const Container = styled.div`
    grid-area: MH;

    border-bottom: 1px solid ${props => props.theme.colors.gray};
    background-color: ${props => props.theme.colors.secondary};
    /* color: ${props => props.theme.colors.white}; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
`

export const Profile = styled.div`
    color: ${props => props.theme.colors.white};

`

export const Welcome = styled.h3`

    > span {
        font-size: 1.2rem;
    }
`

export const UserName = styled.span``