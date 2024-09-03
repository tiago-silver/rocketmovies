import styled from "styled-components";

export const Container = styled.button`
    width: 100%;

    background: ${({ theme, isdetails}) => isdetails ? 'transparent' : theme.COLORS.BACKGROUND_500};
    border: none;
    border-radius:1.6rem;
    padding:${({isdetails}) => isdetails ? "3.2rem 0rem" : "3.2rem"} ;
    margin-bottom: 2.4rem;

    > header{
        display: flex;
        flex-direction: ${({isdetails}) => isdetails ? "row" : "column"};
        align-items:  ${({isdetails}) => isdetails ? "center" : "start"};
        
        
        > h1 {
            font-size:  ${({isdetails}) => isdetails ? "3.6rem" : "2.4rem"};
            color: ${({ theme}) => theme.COLORS.WHITE};
            font-weight: ${({isdetails}) => isdetails ? "500" : "700"};
            margin-right: 2rem;
        }
        
        > span {
            color: ${({ theme}) => theme.COLORS.RED};
            font-size: ${({isdetails}) => isdetails ? "3.6rem" : "1.6rem"};
           
    
            > svg {
                width: ${({isdetails}) => isdetails ? "2rem" : "1.2rem"} ;
                height: ${({isdetails}) => isdetails ? "2rem" : "1.2rem"};
                margin-right: 1rem;
                
            }
           
        }
    }
    .userDate {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: .8rem;

        margin: 2.4rem 0 4.8rem;

        > img {
            width: 1.6rem;
            height: 1.6rem;
            border-radius: 50%;
        }

        span {
            color:${({ theme}) => theme.COLORS.GRAY_200};
            font-size: 1.6rem;
            font-weight: 400;
        }

        > svg {
            color: ${({ theme}) => theme.COLORS.RED};
        }
    }


    p {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;

        margin-bottom: 2rem;

        color: ${({ theme}) => theme.COLORS.GRAY_200};
        font-size: 1.6rem;

    };

    text-align: left;

`