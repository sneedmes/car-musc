import styles from "./Achievements.module.css"

export const Achievements = () => {

    const achivements = [
        {
            title: '#1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui'
        },
        {
            title: '#6',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui'
        },
        {
            title: '#2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui'
        },
        {
            title: '#1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui'
        },
        {
            title: '#4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui'
        },
        {
            title: '#3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui'
        },
        {
            title: '#1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui'
        },
        {
            title: '#cup',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui'
        }
    ]

    return (
        <>
            <section className={`${styles.achievements}`}>
                <div className={`${styles.achievements_container}`}>
                    <div className={`${styles.achievements_description}`}>
                        <h2>наши достижения от кубка россии до чемпионатов мира</h2>
                        <div className={`${styles.achievements_rhomb_container}`}>
                            <div className={`${styles.rhomb}`}></div>
                            <div className={`${styles.rhomb}`}></div>
                            <div className={`${styles.rhomb}`}></div>
                            <div className={`${styles.rhomb}`}></div>
                        </div>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant tincidunt aliquam
                            tincidunt pretium sodales. Tristique odio pellentesque et tincidunt posuere arcu purus
                            lobortis risus. Urna, ut amet odio orci magnis praesent ultrices. Praesent malesuada lacus
                            tellus tristique sit at. Sed viverra nulla nam arcu, non iaculis pretium, volutpat.</h5>
                    </div>

                    <div>
                        <div>
                            {achivements.map((info) =>
                                <div>
                                    <h2>{info.title}</h2>
                                    <h5>{info.description}</h5>
                                </div>)}
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
