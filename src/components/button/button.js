import css from "./button.module.css"

console.log(css);

function Button() {
    return (
        <button className={css["search-btn"]}>
            Поиск +
        </button>
    )
}

export default Button;