import { Container, Form, Avatar } from "./styles";

import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock} from "react-icons/fi";

import { Input} from '../../components/Input'
import { Button} from "../../components/Button"

import { Link } from "react-router-dom";

export function Profile(){
    return (
        <Container>
            <header>
               
                <Link to = "/"> <FiArrowLeft /> Voltar</Link>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/tiago-silver.png" alt="Perfil do usuário" />
                    <label htmlFor="avatar">
                        <FiCamera />
                        <input type="file" name="" id="avatar" />
                    </label>
                </Avatar>

                <Input type = "text" icon={FiUser} placeholder = 'Usuário' />
                <Input type = "email" icon={FiMail} placeholder = 'E-mail' />
                <Input type = "password" icon={FiLock} placeholder = 'Senha atual' />
                <Input type = "password" icon={FiLock} placeholder = 'Senha antiga' />
                
                <Button title='Salvar'/>
            </Form> 

            
        </Container>
    )
 
}