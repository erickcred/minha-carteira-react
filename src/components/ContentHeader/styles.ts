import styled from "styled-components";

interface ITitleContainerProps  {
    lineColor: string
}

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 25px;
    width: 100%;
`

export const TitleContainer = styled.div<ITitleContainerProps>`
    > h1 {
        color: ${props => props.theme.colors.white};

        &::after {
            border-bottom: 10px solid ${props => props.lineColor};
            content: '';
            display: block;
            width: 55px;
            background-color: ${props => props.theme.colors.info}
        }
    }
`

export const Controllers = styled.div`
    display: flex;
` 