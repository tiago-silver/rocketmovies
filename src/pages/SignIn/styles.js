import styled from "styled-components";

import backgroundImg from '../../assets/bgPhoto.png'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: stretch;
    


`

export const Form = styled.form`
    padding: 0 13.6rem;

    display: flex;
    flex-direction: column;
    
    justify-content: center;

    

    > h1 {
        color: ${({ theme})=> theme.COLORS.RED};
        font-size: 4.8rem;
        font-weight: 700;

    }

    > p {
        color: ${({ theme})=> theme.COLORS.GRAY_200};
        font-size: 1.4rem;
        font-weight: 400;
    }
    > h2 {
        color: ${({ theme})=> theme.COLORS.WHITE};
        font-size: 2.4rem;
        font-weight: 500;

        margin: 4.8rem 0;
    }

    > a {
        margin-top:4.2rem;
        color: ${({ theme})=> theme.COLORS.RED};
    }
    


`

export const Background = styled.div`
   flex: 1;
   background: url(${backgroundImg}) no-repeat center center;
   background-size: cover;
`