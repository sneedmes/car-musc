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
            icon: "icons/icon-5.png",
            title: "Оклейка салона",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat."
        }
    ]

    return(
        <section className={`${styles.services}`}>
            <div className={`${styles.services_container}`}>

                <h2>наши услуги</h2>

                <div className={`${styles.rhomb_container}`}>
                    <div className={`${styles.rhomb}`}></div>
                    <div className={`${styles.rhomb}`}></div>
                    <div className={`${styles.rhomb}`}></div>
                    <div className={`${styles.rhomb}`}></div>
                </div>

                <div className={`${styles.services_btn}`}>
                    <Button title={"оклейка"} handleClick={() => null} active={true} position={"servicesMain"}/>
                    <Button title={"детейлинг"} handleClick={() => null} active={true} position={"servicesMain"}/>
                </div>

                <div className={`${styles.services_info}`}>
                    {services.map((info)=>
                    <div className={`${styles.services_info_block}`}>
                        <img src={info.icon} alt=""/>
                        <h5>{info.title}</h5>
                        <p>{info.text}</p>
                        <Button title={"подробнее"} handleClick={()=>null} active={false} position={"servicesMainBlock"}/>
                    </div>
                    )}
                </div>
            </div>
        </section>
    )
}