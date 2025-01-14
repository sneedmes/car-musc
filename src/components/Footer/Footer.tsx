import styles from "./Footer.module.css"
import {Button} from "../Button/Button";

export const Footer=()=>{
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
                                <div>
                                    <Button title={"icons/telegramm.png"} handleClick={()=>null} active={false} position={"footer_icon"}/>
                                    <Button title={"icons/youtube.png"} handleClick={()=>null} active={false} position={"footer_icon"}/>
                                    <Button title={"icons/vk.png"} handleClick={()=>null} active={false} position={"footer_icon"}/>
                                </div>
                            </div>
                            <div>
                                <Button title={"ОТПРАВИТЬ"} handleClick={()=>null} active={false} position={"footer_submit"}/>
                                <div>
                                    <div>
                                        <img src="" alt=""/>
                                        <p>EU FAUCIBUS ET RUTRUM FRINGILLA ORCI NUNC</p>
                                    </div>
                                    <div>
                                        <img src="" alt=""/>
                                        <p>8 (812) 123-45-67</p>
                                        <img src="" alt=""/>
                                        <p>TEST@TEST.RU</p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>

            </div>

        </section>
    )
}