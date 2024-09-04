import styled from "styled-components";

export const Container = styled.header`

    grid-area: header;


    margin-bottom: 2.5rem;
    padding: 2.4rem 7rem;
    width: 100%;
    height: 11.6rem;
    background-color: ${({ theme}) => theme.COLORS.BACKGROUND_800} ;

    display: flex;
    align-items: center;
    justify-content: space-around;
    
    padding: 0 7rem;

    border-bottom: .1rem solid ${({ theme}) => theme.COLORS.GRAY_100};

   > h1 {
        font-size:2.4rem;
        color: ${({ theme }) => theme.COLORS.RED};
        font-weight: 700;
   }

   >.boxsearch {
       width: 40%;
   }

   
`
export const Profile = styled.div`
    grid-area: profile;
    display: flex;
    align-items: center;
    gap: 0.9rem;
    
   
   
    > div {
        display: flex;
        flex-direction: column;
        align-items: end;
        
        h2 {
            font-size: 1.4rem;
            font-weight:700;
            color: ${({ theme }) => theme.COLORS.WHITE};
            
        }
       
        a {
            font-size: 1.4rem;
            color: ${({ theme }) => theme.COLORS.GRAY_200}
        }
    }

    > img {
        width: 6.4rem;
        height: 6.4rem;
        border-radius:50%;
        border: .1rem solid ${({theme}) => theme.COLORS.GRAY_100};
    }
`