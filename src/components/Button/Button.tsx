import styles from "./Button.module.css"

type ButtonProps = {
    title: string,
    handleClick: ()=>void,
    active: boolean,
    position: string
}

export const Button=({title, handleClick, active, position}:ButtonProps)=>{
    return(
        <>
            {position === "nav" &&
                <button
                className={`${styles.button_nav}`}
                onClick={handleClick}
                >
                    {title}
                </button>
            }
        </>
    )
}