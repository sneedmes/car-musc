import styles from "./Main.module.css";
import {Button} from "../Button/Button";

type MainProps = {
    handleClick: (tab: string)=>void
}

export const Main = ({handleClick}:MainProps)=>{
    return(
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
    )
}