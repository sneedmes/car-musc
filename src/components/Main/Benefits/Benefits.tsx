import styles from "./Benefits.module.css"
import {Button} from "../../Button/Button";

export const Benefits=()=>{
    const benefits = [
        {
            img: "icons/icon-4.png",
            title: "100% ПОЛИРОЛЬ AXEM",
            text: "Pharetra in bibendum id id. Sit maecenas sollicitudin est, hendrerit in malesuada. Eu, et lacus nisi mus sagittis, rhoncus est dictum. Gravida lectus urna, arcu, sodales. Ac."
        },
        {
            img: "icons/icon-1.png",
            title: "ВЫПОЛНЯЕМ РАБОТУ ЧЕТКО ПО ТЗ",
            text: "Lorem nulla non nibh quis elit odio. Dui et ultricies duis mattis dictum et senectus nunc sodales. Tellus lorem risus etiam quam massa lobortis convallis laoreet. Nec."
        },
        {
            img: "icons/icon-2.png",
            title: "У НАС ЛУЧШИЕ МАСТЕРА",
            text: "Posuere nam sodales ullamcorper bibendum justo maecenas at. Ultricies bibendum morbi tempor vehicula. Ultrices erat maecenas in id maecenas sed ipsum scelerisque."
        },
    ]

    return(
        <section className={`${styles.benefits}`}>

            <div className={`${styles.benefits_slider}`}>
                <img src="icons/benefit-img.png" alt=""/>
                <div className={`${styles.benefits_slider_text}`}>
                    <div>
                        <Button title={"<"} handleClick={() => null} active={false} position={"slider"}/>
                    </div>
                    <h6>Neque metus vitae urna purus aliquam. Felis nullam pellentesque ac mi commodo, amet, porta in. Dui.</h6>
                    <div>
                        <Button title={">"} handleClick={() => null} active={false} position={"slider"}/>
                    </div>
                </div>
            </div>

            <div className={`${styles.benefits_block}`}>
                <div className={`${styles.lists}`}>
                    {
                        benefits.map((info) =>
                            <>
                                <div className={`${styles.list_title}`}>
                                    <img src={info.img} alt=""/>
                                    <h4>{info.title}</h4>
                                </div>
                                <h5>{info.text}</h5>
                                <div className={`${styles.rhomb_container}`}>
                                    <div className={`${styles.rhomb}`}></div>
                                    <div className={`${styles.rhomb}`}></div>
                                    <div className={`${styles.rhomb}`}></div>
                                    <div className={`${styles.rhomb}`}></div>
                                </div>
                            </>
                        ).slice(0, 2)
                    }

                    {
                        benefits.map((info) =>
                            <>
                                <div className={`${styles.list_title}`}>
                                    <img src={info.img} alt=""/>
                                    <h4>{info.title}</h4>
                                </div>
                                <h5>{info.text}</h5>
                            </>
                        ).slice(2, 3)
                    }

                </div>
            </div>

        </section>
    )
}