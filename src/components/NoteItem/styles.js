import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme, $isnew}) => $isnew ? "transparent"  : theme.COLORS.BACKGROUND_700 };
    

    border: ${({theme, $isnew}) => $isnew ? `2px dashed ${theme.COLORS.GRAY_100}` : "none"};
    border-radius: 1rem;
    margin-bottom: .8rem;
    padding-right: 1.6rem;

    > input {
        width: 100%;
        height: 5.6rem;
        border: none;

        background-color: transparent;
        color: ${({ theme}) => theme.COLORS.WHITE };

        padding: 1.2rem;

        &::placeholder{
            color: ${({ theme}) => theme.COLORS.GRAY_100}
        }
    }
    .button_add {
        color: ${({ theme }) => theme.COLORS.RED}
    }
    .button_delete {
        color: ${({ theme }) => theme.COLORS.FULL_RED}
    }

    > button {
        border: none;
        background: none;
    }
`