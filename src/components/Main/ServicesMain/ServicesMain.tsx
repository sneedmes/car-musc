import styles from "./ServicesMain.module.css"
import {Button} from "../../Button/Button";

export const ServicesMain=()=>{
    const services=[
        {
            icon: "icons/icon-4.png",
            title: "Защитные пленки",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat."
        },
        {
            icon: "icons/icon-1.png",
            title: "Цветные пленки",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat."
        },
        {
            icon: "icons/icon-2.png",
            title: "Дизайн",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat."
        },
        {
            icon: "icons/icon-4.png",
            title: "Оклейка салона",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat."
        }
    ]

    return(
        <section className={`${styles.services}`}>
            <div className={`${styles.services_container}`}>

                <h2>НАШИ УСЛУГИ</h2>

                <div className={`${styles.rhomb_container}`}>
                    <div className={`${styles.rhomb}`}></div>
                    <div className={`${styles.rhomb}`}></div>
                    <div className={`${styles.rhomb}`}></div>
                    <div className={`${styles.rhomb}`}></div>
                </div>

                <div className={`${styles.services_btn}`}>
                    <Button title={"ОКЛЕЙКА"} handleClick={() => null} active={true} position={"servicesMain"}/>
                    <Button title={"ДЕТЕЙЛИНГ"} handleClick={() => null} active={false} position={"servicesMain"}/>
                </div>

                <div className={`${styles.services_info}`}>
                    {services.map((info)=>
                    <div className={`${styles.services_info_block}`}>
                        <div>
                            <img src={info.icon} alt=""/>
                        </div>
                        <h5>{info.title}</h5>
                        <h6>{info.text}</h6>
                        <Button title={"подробнее"} handleClick={()=>null} active={false} position={"servicesMainBlock"}/>
                    </div>
                    )}
                </div>
            </div>
        </section>
    )
}