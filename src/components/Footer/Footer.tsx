import styles from "./Footer.module.css"
import {Button} from "../Button/Button";

type footerProps = {
    handleClick: (tab: string)=>void
}

export const Footer=({handleClick}:footerProps)=>{
    return(
        <section className={`${styles.footer}`}>

            <div className={`${styles.footer_container}`}>

                <div className={`${styles.footer_main}`}>

                    <h2>ОТВЕТИМ НА ЛЮБОЙ ВОПРОС</h2>
                    <div className={`${styles.rhomb_container}`}>
                        <div className={`${styles.rhomb}`}></div>
                        <div className={`${styles.rhomb}`}></div>
                        <div className={`${styles.rhomb}`}></div>
                        <div className={`${styles.rhomb}`}></div>
                    </div>

                    <div className={`${styles.footer_form_container}`}>
                        <form action="" className={`${styles.footer_form}`}>
                            <div className={`${styles.footer_form_personal}`}>
                                <input type="text" placeholder="ИМЯ"/>
                                <input type="tel" placeholder="ТЕЛЕФОН"/>
                            </div>
                            <div className={`${styles.footer_form_message}`}>
                                <input type="text" placeholder="ВОПРОС ПО ДИЗАЙНУ, ТЮНИНГУ И ДР."/>
                                <div className={`${styles.footer_form_social}`}>
                                    <Button title={"icons/telegramm.png"} handleClick={()=>null} active={false} position={"footer_icon"}/>
                                    <Button title={"icons/youtube.png"} handleClick={()=>null} active={false} position={"footer_icon"}/>
                                    <Button title={"icons/vk.png"} handleClick={()=>null} active={false} position={"footer_icon"}/>
                                </div>
                            </div>
                            <div className={`${styles.footer_form_submit}`}>
                                <Button title={"ОТПРАВИТЬ"} handleClick={()=>null} active={false} position={"footer_submit"}/>
                                <div className={`${styles.footer_form_contacts}`}>
                                    <div className={`${styles.footer_form_contacts_address}`}>
                                        <img src="icons/map.png" alt=""/>
                                        <p>EU FAUCIBUS ET RUTRUM FRINGILLA ORCI NUNC</p>
                                    </div>
                                    <div className={`${styles.footer_form_contacts_info}`}>
                                        <div className={`${styles.contact}`}>
                                            <img src="icons/tel.png" alt=""/>
                                            <p>8 (812) 123-45-67</p>
                                        </div>
                                        <div className={`${styles.contact}`}>
                                            <img src="icons/mail.png" alt=""/>
                                            <p>TEST@TEST.RU</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className={`${styles.footer_nav}`}>
                    <div className={`${styles.footer_nav_rights}`}>
                        <p>2022 © EST ET VIVERRA PELLENTESQUE PHARETRA LOREM PROIN IN. VITAE MAGNA AT TEMPUS COMMODO.</p>
                    </div>
                    <div className={`${styles.footer_nav_buttons}`}>
                        <Button title={'Главная'} handleClick={()=>handleClick("main")} active={false} position={"nav"}/>
                        <Button title={'Оклейка автомобилей'} handleClick={()=>handleClick("services")} active={false} position={"nav"}/>
                        <Button title={'Детейлинг автомобилей'} handleClick={()=>handleClick("services")} active={false} position={"nav"}/>
                        <Button title={'Галерея работ'} handleClick={()=>handleClick("gallery")} active={false} position={"nav"}/>
                    </div>
                </div>

            </div>

        </section>
    )
}