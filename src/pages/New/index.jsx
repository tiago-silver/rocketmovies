import { Container, Form, Content } from "./styles";

import { FiArrowLeft } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem/inde";
import { Button } from "../../components/Button";

import { Link } from "react-router-dom";

export function New(){
    return (
        <Container>
            <Header />


            <main>

                <Content>
                    <Link to='/'><FiArrowLeft /> Voltar</Link>

                    <Form>
                        <header>
                            <h1>Novo filme</h1>
                        </header>
                        <div className="inputs">
                            <Input placeholder = "Título"/>

                            <Input placeholder = "Sua nota (0 a 5)"/>

                        </div>
                        

                        <Textarea placeholder="Observações"/>

                        <Section title="Marcadores">
                            <div className="tags">
                                <NoteItem  value="Romance" />

                                <NoteItem  value="Romance" />

                                <NoteItem  value="Romance" />

                                
                                <NoteItem  value="Romance" />

                                <NoteItem $isnew placeholder = "Novo marcador"/>

                            
                            </div>
                        </Section>

                        <div className="buttons">
                            <Button title= "Excluir filme" isnew  />
                            <Button title= "Salvar alterações"  />
                        </div>

                    </Form>
                </Content>
            </main>
           

        </Container>
    )
 
}