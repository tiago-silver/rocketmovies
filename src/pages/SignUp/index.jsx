import { Container, Form, Background } from "./styles";

import { Input} from '../../components/Input'
import { Button} from '../../components/Button'

import { FiMail, FiLock, FiArrowLeft, FiUser } from "react-icons/fi";

export function SignUp(){
    return (
        <Container>
            <Background />
            <Form>
                <h1>RocketNotes</h1>
                <p>
                Aplicação para acompanhar tudo que assistir.
                </p>

                <h2>Crie sua conta</h2>

                <Input type = 'text' icon={FiUser} placeholder = "Nome"/>
                <Input type = 'email' icon={FiMail} placeholder = "E-mail"/>
                <Input type = 'password' icon={FiLock} placeholder = "Senha"/>

                <Button title='Cadastrar' />

                <a href="#"><FiArrowLeft /> Voltar para o login</a>
            </Form>

            
            
        </Container>
    )

}