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

                {/* START OF MAIN SECTION */}
                {tab === 'main' &&
                    <section className={`${styles.header_main}`}>

                        <div className={`${styles.main_info_container}`}>
                            <div className={`${styles.main_info}`}>
                                <div className={`${styles.main_info_title}`}>
                                    <h1>CAR MUSC</h1>
                                    <div className={`${styles.main_title_rhomb_container}`}>
                                        <div className={`${styles.main_title_rhomb}`}></div>
                                        <div className={`${styles.main_title_rhomb}`}></div>
                                        <div className={`${styles.main_title_rhomb}`}></div>
                                        <div className={`${styles.main_title_rhomb}`}></div>
                                    </div>
                                </div>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae orci urna amet
                                    penatibus.</h3>
                                <div className={`${styles.main_info_button}`}>
                                    <Button
                                        title={"Наши услуги"}
                                        handleClick={() => handleClick('services')}
                                        active={false}
                                        position={"header-main-button"}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.main_contacts}`}>
                            <div className={`${styles.main_contacts_block} ${styles.contacts_first_block}`}>
                                <h6>Адрес:</h6>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
                            </div>
                            <div className={`${styles.main_contacts_block} ${styles.contacts_second_block}`}>
                                <h6>Телефон:</h6>
                                <h5>8 (812) 123-45-67</h5>
                                <h5>8-911-123-45-67</h5>
                            </div>
                            <div className={`${styles.main_contacts_block} ${styles.contacts_third_block}`}>
                                <h6>Режим работы:</h6>
                                <h5>пн-пт : 10:00 - 20:00</h5>
                                <h5>сб-вск : 12:00 - 20:00</h5>
                            </div>
                        </div>

                    </section>
                }
                {/* END OF MAIN SECTION */}

                {tab === 'services' &&
                    <section className={`${styles.services}`}>
                        <div className={`${styles.services_info}`}>
                            <h1>Оклейка автомобиля защитными пленками</h1>
                            <div className={`${styles.main_title_rhomb_container}`}>
                                <div className={`${styles.main_title_rhomb}`}></div>
                                <div className={`${styles.main_title_rhomb}`}></div>
                                <div className={`${styles.main_title_rhomb}`}></div>
                                <div className={`${styles.main_title_rhomb}`}></div>
                            </div>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae orci urna amet penatibus.</h3>
                            <div className={`${styles.services_info_button}`}>
                                <Button
                                    title={"Цены"}
                                    handleClick={() => handleClick('services')}
                                    active={false}
                                    position={"header-services-button"}
                                />
                            </div>
                        </div>
                    </section>
                }
            </header>
        </>
    )
}