import styles from "./Header.module.css"
import {useState} from "react";
import {Button} from "../Button/Button";

export const Header=()=>{
    const [tab, setTab] = useState('main')
    const handleClick=(tab: string)=>{
        setTab(tab)
    }
    return(
        <>
            <header className={`${styles.header}`}>
                <nav className={`${styles.header_nav}`}>
                    <Button title={'Главная'} handleClick={()=>handleClick("main")} active={true} position={"nav"}/>
                    <Button title={'Оклейка автомобилей'} handleClick={()=>handleClick("services")} active={false} position={"nav"}/>
                    <Button title={'Детейлинг автомобилей'} handleClick={()=>handleClick("services")} active={false} position={"nav"}/>
                    <Button title={'Галерея работ'} handleClick={()=>handleClick("gallery")} active={false} position={"nav"}/>
                </nav>
            </header>
        </>
    )
}