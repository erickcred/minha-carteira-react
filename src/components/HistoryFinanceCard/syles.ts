import styled from 'styled-components'

interface ITagProps {
    color: string
}

export const Container = styled.li`
    background-color: ${props => props.theme.colors.tertiary};
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    margin: 15px 0;
    padding: 12px 10px;
    transition: all .3s;
    opacity: .8;
    position: relative;

    &:hover {
        opacity: 1;
        transform: translateX(10px)
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 10px;
    }
`

export const Tag = styled.div<ITagProps>`
    background-color: ${props => props.color};
    width: 8px;
    height: 60%;
    left: 0;

    position: absolute;
`