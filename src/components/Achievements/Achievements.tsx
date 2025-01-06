import styles from "./Achievements.module.css"

export const Achievements = () =>{
    return(
        <>
            <section className={`${styles.achievements}`}>
                <div>
                    <h2>наши достижения от кубка россии до чемпионатов мира</h2>
                    <div className={`${styles.achievements_rhomb_container}`}>
                        <div className={`${styles.rhomb}`}></div>
                        <div className={`${styles.rhomb}`}></div>
                        <div className={`${styles.rhomb}`}></div>
                        <div className={`${styles.rhomb}`}></div>
                    </div>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant tincidunt aliquam tincidunt pretium sodales. Tristique odio pellentesque et tincidunt posuere arcu purus lobortis risus. Urna, ut amet odio orci magnis praesent ultrices. Praesent malesuada lacus tellus tristique sit at. Sed viverra nulla nam arcu, non iaculis pretium, volutpat.</h5>
                </div>
                <div>

                </div>
            </section>
        </>
    )
}
