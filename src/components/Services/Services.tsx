import styles from "./Services.module.css";
import {Button} from "../Button/Button";

type MainProps = {
    handleClick: (tab: string)=>void
}

export const Services=({handleClick}:MainProps)=>{
    return (
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
    )
}