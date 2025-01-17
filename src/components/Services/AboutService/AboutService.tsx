import styles from "./AboutService.module.css"
import {Button} from "../../Button/Button";

export const AboutService=()=>{
    return(
        <section className={`${styles.about}`}>
            <div className={`${styles.about_container}`}>
                <div className={`${styles.about_description}`}>
                    <h4>ПОЛИУРЕТАНОВАЯ ПЛЕНКА ЕДИНСТВЕННАЯ НАДЕЖНАЯ ЗАЩИТА АВТОМОБИЛЯ ОТ ВСЕХ ВНЕШНИХ ВОЗДЕЙСТВИЙ</h4>
                    <div className={`${styles.about_rhomb_container}`}>
                        <div className={`${styles.rhomb}`}></div>
                        <div className={`${styles.rhomb}`}></div>
                        <div className={`${styles.rhomb}`}></div>
                        <div className={`${styles.rhomb}`}></div>
                    </div>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant tincidunt aliquam tincidunt
                        pretium sodales. Tristique odio pellentesque et tincidunt posuere arcu</h5>
                    <div className={`${styles.about_sponsors}`}>
                        <div className={`${styles.about_sponsor}`}>
                            <img src="icons/sponsorVoys.png" alt=""/>
                            <img src="icons/sponsorStar.png" alt=""/>
                        </div>
                        <div className={`${styles.about_sponsor}`}>
                            <img src="icons/sponsorStar.png" alt=""/>
                            <img src="icons/sponsorVoys.png" alt=""/>
                        </div>
                    </div>
                </div>

                <div className={`${styles.about_slider}`}>
                    <img src="icons/main-img.png" alt=""/>
                    <div className={`${styles.about_slider_text}`}>
                        <div>
                            <Button title={"<"} handleClick={() => null} active={false} position={"slider"}/>
                        </div>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor nibh feugiat
                            est.
                            Consectetur lectus.</h6>
                        <div>
                            <Button title={">"} handleClick={() => null} active={false} position={"slider"}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}