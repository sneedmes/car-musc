import styles from "./Header.module.css"
import {Button} from "../Button/Button";

type HeaderProps = {
    handleClick: (tab: string)=>void
}

export const Header=({handleClick}: HeaderProps)=>{
    return(
        <>
            {/* START OF NAV SECTION */}
            <nav className={`${styles.header_nav}`}>
                <div className={`${styles.header_nav_buttons}`}>
                    <Button title={'Главная'} handleClick={()=>handleClick("main")} active={true} position={"header-nav"}/>
                    <Button title={'Оклейка автомобилей'} handleClick={()=>handleClick("services")} active={false} position={"header-nav"}/>
                    <Button title={'Детейлинг автомобилей'} handleClick={()=>handleClick("services")} active={false} position={"header-nav"}/>
                    <Button title={'Галерея работ'} handleClick={()=>handleClick("gallery")} active={false} position={"header-nav"}/>
                </div>
                <div className={`${styles.header_nav_menu}`}>
                    <div className={`${styles.header_menu_line}`}></div>
                    <div className={`${styles.header_menu_line_special}`}></div>
                    <div className={`${styles.header_menu_line}`}></div>
                </div>
            </nav>
            {/* END OF NAV SECTION */}
        </>
    )
}