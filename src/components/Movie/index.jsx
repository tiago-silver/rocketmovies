import { Container } from "./styles";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Tag } from "../Tag";

export function Movie({ data, ...rest}){
    return(
        <Container {...rest}>
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
           

            <p>{data.description}</p>

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