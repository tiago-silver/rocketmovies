import styled from "styled-components";

export const Container = styled.span`
    font-size: 1.2rem;
    font-weight: 400;
    padding: .8rem 1.6rem;
    border-radius: .8rem;
    margin-right: .6rem;

    
    color: ${({theme})=> theme.COLORS.WHITE};
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_600};



`