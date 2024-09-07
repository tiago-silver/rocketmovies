import styled from "styled-components";

export const Container = styled.button`
        width: 100%;
        height: 5.6rem;

        background-color: ${({ theme, isnew}) => isnew  ? theme.COLORS.BACKGROUND_900 : theme.COLORS.RED};
        color: ${({ theme, isnew}) => isnew  ? theme.COLORS.RED : theme.COLORS.BACKGROUND_600};
       
        border:  none;
        border-radius: 1rem;

        font-weight: 500;

        margin-top: 1.6rem;

`