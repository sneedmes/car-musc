import styles from "./Advantages.module.css"
import {Button} from "../../Button/Button";

export const Advantages=()=>{

    const advantages = [
        {
            img: "icons/icon-1.png",
            title: "материалы от лучших компаний",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, rutrum est, molestie proin tristique duis sed. Morbi suspendisse amet nisl vestibulum risus. Quis pretium"
        },
        {
            img: "icons/icon-2.png",
            title: "Опытные мастера",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et donec elementum egestas vitae ullamcorper. Amet volutpat ornare pharetra amet adipiscing orci, lectus aenean ultricies. Erat viverra eget blandit ornare. Molestie ipsum commodo faucibus rhoncus"
        },
        {
            img: "icons/icon-3.png",
            title: "Гарантия на все виды работы",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat."
        },
    ]

    return(
        <section className={`${styles.advantages}`}>

            <div className={`${styles.advantages_block}`}>
                <div className={`${styles.lists}`}>
                    {
                        advantages.map((info) =>
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
                        advantages.map((info) =>
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

            <div>
                <Button title={"<"} handleClick={() => null} active={false} position={"slider"}/>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor nibh feugiat est.
                    Consectetur lectus.</h6>
                <Button title={"<"} handleClick={() => null} active={false} position={"slider"}/>
            </div>

        </section>
    )
}