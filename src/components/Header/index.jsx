import { Container, Profile } from "./styles";
import { Input } from "../Input";
import { FiSearch } from "react-icons/fi";

export function Header(){
    return(
        <Container>
            <h1>RocketMovies</h1>
           
          
          <div className="boxsearch">
            <Input icon={FiSearch} placeholder="Pesquisa por título"/>

          </div>
            
            <Profile>
                <div>
                    <h2>Tiago Luiz</h2>
                    <a href="#">Sair</a>
                </div>
                <img src="https://github.com/tiago-silver.png" alt="" />

            </Profile>
        </Container>
    )
}