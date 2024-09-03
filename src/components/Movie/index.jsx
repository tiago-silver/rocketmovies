import { Container } from "./styles";
import { FaStar, FaRegStar, FaRegClock } from "react-icons/fa";
import { Tag } from "../Tag";

export function Movie({ data, $isdetails = false , ...rest}){
    
    return(
        <Container {...rest}>
            <header>
                <h1>{data.title}</h1>
                <span>
                {
                    Array.from(
                        { length: 5},
                        (_, index) => (
                            index < data.rating ? <FaStar key = {index} />: <FaRegStar key  = {index} />
                        )
                    )
                }
                </span>

            </header>

            {
                (data.forUser || data.created_at || data.userAvatar) && 
                <div className="userDate">
                    <img src={data.userAvatar} alt="Perfil do usuário" />
                    <span>Por {data.forUser}</span>
                    <FaRegClock />
                    <span>  {data.created_at}</span>
                </div>
            }
           
            {
                data.description &&
                <p>{data.description}</p>
            }

            {
                data.tags && 

                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
                    }

                </footer>

            }
        </Container>
    )
}