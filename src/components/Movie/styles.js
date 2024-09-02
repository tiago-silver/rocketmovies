import styled from "styled-components";

export const Container = styled.button`
    width: 100%;

    background-color: ${({ theme}) => theme.COLORS.BACKGROUND_500};
    border: none;
    border-radius:1.6rem;
    padding: 3.2rem;
    margin-bottom: 2.4rem;

    h1 {
        font-size: 2.4rem;
        color: ${({ theme}) => theme.COLORS.WHITE};
        font-weight: 700;
        line-height: normal;
    }

    > span {
        color: ${({ theme}) => theme.COLORS.RED};

        > svg {
            width: 1.2rem;
            height: 1.2rem;
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