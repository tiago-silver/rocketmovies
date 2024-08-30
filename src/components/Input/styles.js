import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme}) => theme.COLORS.BACKGROUND_700};
    border-radius: 1rem;
    width: 100%;
    border-radius: 1.0rem;

    overflow: hidden;
   
    display: flex;
    align-items: center;

    > svg {
        margin: 1rem;
        color: ${({ theme }) => theme.COLORS.GRAY_200}
    }
   
    > input {
        border: none;
        background-color: ${({ theme}) => theme.COLORS.BACKGROUND_700};
        color: ${({ theme}) => theme.COLORS.WHITE};
        
        width: 100%;

        height: 5.6rem;
    }
`