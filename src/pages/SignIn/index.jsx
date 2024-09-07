import { Container, Form, Background } from "./styles";

import { Input} from '../../components/Input'
import { Button} from '../../components/Button'

import { Link } from "react-router-dom";

import { FiMail, FiLock } from "react-icons/fi";

export function SignIn(){
    return (
        <Container>
            <Form>
                <h1>RocketNotes</h1>
                <p>
                Aplicação para acompanhar tudo que assistir.
                </p>

                <h2>Faça seu login</h2>

                <Input type = 'email' icon={FiMail} placeholder = "E-mail"/>
                <Input type = 'password' icon={FiLock} placeholder = "Senha"/>

                <Button title='Entrar' />

                <Link to='/register'>Criar Conta</Link>
            </Form>

            <Background />
            
        </Container>
    )

}