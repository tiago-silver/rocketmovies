import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   height: 100vh;

   > main {
       

        a {
            font-size: 1.6rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;

            color: ${({ theme}) => theme.COLORS.RED};

            padding-bottom: 1.5rem;
        }
   }


`

export const Form = styled.form`
    display: flex; 
    flex-direction: column;
    gap: 4rem;

   

    >h1 {
        font-size: 2.25rem;
        font-weight: 500;
    }


    .inputs {
        display: flex;
        gap: 5rem;
    }
    .tags {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        background-color: ${({ theme}) => theme.COLORS.BACKGROUND_900};
        padding: 1.6rem;
        border-radius: .8rem;
        
    }
    .buttons {
        display: flex;
        gap: 4rem;
    }
`

export const Content = styled.div`
        max-width: 104rem;
        margin: auto;
        padding: 0 10rem 5rem;
       
        
`