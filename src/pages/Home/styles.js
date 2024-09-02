import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
   

`
export const Content = styled.div`
    max-width: 102.4rem;
    margin: auto;
    height: calc(100vh - 12.2rem);
   
    padding: 5rem 12.2rem;

    > header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        h1 {
            font-size:3.2rem;
            font-weight: 400;
            color: ${({theme}) => theme.COLORS.WHITE};
        }
    }

        main {
           
            padding-right: 0.5rem;
            margin-top:3.7rem;
            height: calc(70% - 3.7rem);
            overflow-y: scroll;
        }

        main::-webkit-scrollbar {
             width: .8rem; /* Largura da barra de rolagem */
             
        }

        main::-webkit-scrollbar-track {
            background: transparent; /* Cor de fundo da barra de rolagem */
            border-radius: 1rem; /* Arredondar os cantos do trilho */
        }

        main::-webkit-scrollbar-thumb {
            background: ${({theme}) => theme.COLORS.RED}; /* Cor do "polegar" */
            border-radius: 10px; /* Arredondar os cantos do "polegar" */
        }
        main::-webkit-scrollbar-thumb:hover {
        background: ${({theme}) => theme.COLORS.DARK_RED}; /* Cor do "polegar" ao passar o mouse */
}
    `
    export const NewNote = styled.a`
        background-color: ${({theme}) => theme.COLORS.RED};
        border-radius: .8rem;
        color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        padding: 3rem;

        height: 4.8rem;

        display: flex;
        align-items: center;
        gap:.8rem;

    
`

