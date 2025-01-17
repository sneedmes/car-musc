import styles from "./ServiceBenefits.module.css"
import {services} from "../../Main/ServicesMain/ServicesMain";

export const ServiceBenefits=()=>{
    return(
        <section className={`${styles.benefits}`}>
            <div className={`${styles.benefits_container}`}>
                <h2>ПРЕИМУЩЕСТВА ЗАЩИТНОЙ АНТИГРАВИЙНОЙ ПЛЕНКИ</h2>

                <div className={`${styles.rhomb_container}`}>
                    <div className={`${styles.rhomb}`}></div>
                    <div className={`${styles.rhomb}`}></div>
                    <div className={`${styles.rhomb}`}></div>
                    <div className={`${styles.rhomb}`}></div>
                </div>

                <div className={`${styles.benefits_info}`}>
                    {services.map((info)=>
                        <div className={`${styles.benefits_info_block}`}>
                            <div>
                                <img src={info.icon} alt=""/>
                            </div>
                            <h5>{info.title}</h5>
                            <h6>{info.text}</h6>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}