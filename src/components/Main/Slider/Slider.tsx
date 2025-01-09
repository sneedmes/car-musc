import styles from "./Slider.module.css"
import {Button} from "../../Button/Button";

export const Slider = () => {
    const sliderInfo = [
        {
            img: "slider-img/1.png",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante"
        },
        {
            img: "slider-img/2.png",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante"
        },
        {
            img: "slider-img/3.png",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante"
        },
    ]

    return (
        <section className={`${styles.slider}`}>

            <div className={`${styles.slider_container}`}>
                <Button title={"<"} handleClick={()=>null} active={false} position={"slider"}/>
                {sliderInfo.map((info) =>
                    <div className={`${styles.slider_list}`}>
                        <img src={info.img} alt=""/>
                        <div className={`${styles.slider_list_text}`}>
                            <div className={`${styles.slider_list_back}`}></div>
                            <h5>{info.text}</h5>
                        </div>
                    </div>
                )}
                <Button title={">"} handleClick={()=>null} active={false} position={"slider"}/>
            </div>

        </section>
    )
}