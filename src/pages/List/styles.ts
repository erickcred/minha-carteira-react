import styled from 'styled-components'

export const Container = styled.div`
    height: 90vh;
`

export const Content = styled.div``

export const Filters =  styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 30px;

    & .tag-filter {
        font-size: 18px;
        font-weight: 500;
        background-color: transparent;
        color: ${props => props.theme.colors.white};
        margin: 0 10px;

        transition: opacity .3s;

        &:hover {
            opacity: .7;
        }

    }
    & .tag-filter-recurrent::after {
        content: '';
        display: block;
        width: 55px;
        color: red;
        margin: 0 auto;
        border-bottom: 10px solid ${props => props.theme.colors.warning};
        padding-top: 4px;
    }
    & .tag-filter-eventual::after {
        content: '';
        display: block;
        width: 55px;
        color: red;
        margin: 0 auto;
        border-bottom: 10px solid ${props => props.theme.colors.success};
        padding-top: 4px;
    }
`