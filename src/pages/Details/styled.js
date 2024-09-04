import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    > main {
        max-width: 104rem;
        margin: auto;

        a {
            color: ${({ theme }) => theme.COLORS.RED};
            text-decoration: none;
            font-size: 1rem;
            display: flex;
            align-items: center;
            gap: .5rem;
          
        }
        p {
            text-align: justify;
            font-weight: 400;
        }
    }


    .Content::-webkit-scrollbar {
        width: .8rem; /* Largura da barra de rolagem */
        
    }

    .Content::-webkit-scrollbar-track {
        background: transparent; /* Cor de fundo da barra de rolagem */
        border-radius: 1rem; /* Arredondar os cantos do trilho */
    }

    .Content::-webkit-scrollbar-thumb {
        background: ${({theme}) => theme.COLORS.RED}; /* Cor do "polegar" */
        border-radius: 1rem; /* Arredondar os cantos do "polegar" */
    }
    .Content::-webkit-scrollbar-thumb:hover {
    background: ${({theme}) => theme.COLORS.DARK_RED}; /* Cor do "polegar" ao passar o mouse */
    }
`

export const Content = styled.div`
    overflow-y: auto;
    padding-right: 2.4rem;
    height: 70vh;

    
        

`