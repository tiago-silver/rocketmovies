import styled from "styled-components";

export const Container = styled.section`
    width: 100%;

    > h1 {
        font-size: 2rem;
        font-weight: 400;
        color: ${({ theme}) => theme.COLORS.GRAY_200};
        margin-bottom: 2.4rem;
    }

`