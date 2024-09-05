import { Container } from "./styles";

export function Button({ title, $loading, $isnew, ...rest}){
    console.log($isnew)
    return (
        <Container type="button" disabled = {$loading} {...rest}>
            {$loading ? "Loading..." : title}
        </Container>
    )
}