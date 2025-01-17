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
            {position === "slider" &&
                <>
                    <button
                        className={`${styles.button_slider}`}
                        onClick={handleClick}
                    >
                        <h3>{title}</h3>
                    </button>
                </>
            }
            {position === "servicesMain" &&
                <>
                    <button
                        className={active ? `${styles.button_services_main_active}` : `${styles.button_services_main}`}
                        onClick={handleClick}
                    >
                        <h4>{title}</h4>
                    </button>
                </>
            }
            {position === "footer_submit" &&
                <>
                    <div className={`${styles.button_footer_container}`}>
                        <div className={`${styles.button_footer_submit_back}`}></div>
                        <button
                            className={`${styles.footer_submit}`}
                            onClick={handleClick}
                        >
                            <h5>{title}</h5>
                        </button>
                    </div>
                </>
            }
            {position === "footer_icon" &&
                <>
                    <button
                        className={`${styles.button_footer_icon}`}
                        onClick={handleClick}
                    >
                        <a href="#"><img src={title} alt=""/></a>
                    </button>
                </>
            }
        </>
    )
}