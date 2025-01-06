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
            {position === "header-nav" &&
                <button
                className={`${styles.button_nav}`}
                onClick={handleClick}
                >
                    <h5>{title}</h5>
                </button>
            }
            {position === "header-main-button" &&
                <>
                    <div className={`${styles.button_main_container}`}>
                        <div className={`${styles.button_main_back}`}></div>
                        <button
                            className={`${styles.button_main}`}
                            onClick={handleClick}
                        >
                            <h5>{title}</h5>
                        </button>
                    </div>
                </>
            }
            {position === "header-services-button" &&
                <>
                    <div className={`${styles.button_services_container}`}>
                        <div className={`${styles.button_services_back}`}></div>
                        <button
                            className={`${styles.button_services}`}
                            onClick={handleClick}
                        >
                            <h5>{title}</h5>
                        </button>
                    </div>
                </>
            }
        </>
    )
}