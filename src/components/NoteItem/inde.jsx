import { Container } from "./styles";

import { FiPlus, FiX } from "react-icons/fi";

export function NoteItem({ $isnew, value, onclick, ...rest}){
    return (
        <Container $isnew = {$isnew}>
            <input type="text" value={value} readOnly = {!$isnew} {...rest} />

            <button type="button" onClick={onclick} className={$isnew ? "button_add" : "button_delete"}>
                {
                    $isnew ? <FiPlus /> : <FiX />
                }
                
            </button>
        </Container>
    )
}