import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";


export function New(){
    return (
        <Container>
            <Header />

            <Form>
                <header>
                    <a href="#">Voltar</a>
                    <h1>Novo filme</h1>
                    <button type="submit">Adicionar</button>

 
                </header>
                <div className="inputs">
                    <Input placeholder = "Título"/>

                    <Input placeholder = "Sua nota (0 a 5)"/>

                </div>

            </Form>

        </Container>
    )
 
}