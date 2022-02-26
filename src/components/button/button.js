import css from "./button.module.css"
import { useState } from "react"
function Button(props) {
    
    return (
        <button onClick={props.click} className={css["search-btn"]}>
            +++
        </button>
    )
}

export default Button;

