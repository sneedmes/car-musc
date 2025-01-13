import styles from "./Gallery.module.css"

export const Gallery = () => {
    const images = []
    for (let i = 1; i < 19; i++) {
        images.push("gallery/" + i + ".png")
    }
    return (
        <section className={`${styles.gallery}`}>
            <div className={`${styles.gallery_container}`}>

                <h2>НАШИ РАБОТЫ</h2>

                <div className={`${styles.rhomb_container}`}>
                    <div className={`${styles.rhomb}`}></div>
                    <div className={`${styles.rhomb}`}></div>
                    <div className={`${styles.rhomb}`}></div>
                    <div className={`${styles.rhomb}`}></div>
                </div>

                <div className={`${styles.gallery_img}`}>
                    {images.map((img) =>
                        <img src={img} alt=""/>
                    )}
                </div>
            </div>
        </section>
    )
}