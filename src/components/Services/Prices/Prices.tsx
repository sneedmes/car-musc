import styles from "./Prices.module.css"
import {Gallery} from "../../Main/Gallery/Gallery";

export const Prices = () => {
    return (
        <section className={`${styles.prices}`}>
            <div className={`${styles.prices_container}`}>
                <h2>СТОИМОСТЬ ПОЛНОЙ ОКЛЕЙКИ АВТОМОБИЛЯ</h2>

                <div className={`${styles.rhomb_container}`}>
                    <div className={`${styles.rhomb}`}></div>
                    <div className={`${styles.rhomb}`}></div>
                    <div className={`${styles.rhomb}`}></div>
                    <div className={`${styles.rhomb}`}></div>
                </div>

                <div className={`${styles.prices_table}`}>
                    <table>
                        <thead>
                            <tr>
                                <th>АВТО / МАТЕРИАЛ</th>
                                <th>ПЛЕНКА SPECTROLL</th>
                                <th>ПЛЕНКА HEXIS</th>
                                <th>ПЛЕНКА SUNTEK</th>
                                <th>ПЛЕНКА LLUMAR</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <span>
                                    <div>1 КЛАСС</div>
                                    <div>(MINI COOPER, FIAT 500)</div>
                                </span>
                            </td>
                            <td>53 000</td>
                            <td>64 000</td>
                            <td>69 000</td>
                            <td>72 000</td>
                        </tr>
                        <tr>
                            <td>
                                <span>
                                    <div>2 КЛАСС</div>
                                    <div>(BMW 3, MERCEDES)</div>
                                </span>
                            </td>
                            <td>53 000</td>
                            <td>64 000</td>
                            <td>69 000</td>
                            <td>72 000</td>
                        </tr>
                        <tr>
                            <td>
                                <span>
                                    <div>3 КЛАСС</div>
                                    <div>(BMW 7, MERCEDES S)</div>
                                </span>
                            </td>
                            <td>53 000</td>
                            <td>64 000</td>
                            <td>69 000</td>
                            <td>72 000</td>
                        </tr>
                        <tr>
                            <td>
                                <span>
                                    <div>4 КЛАСС</div>
                                    <div>(BMW X3,X4, MERCEDES)</div>
                                </span>
                            </td>
                            <td>53 000</td>
                            <td>64 000</td>
                            <td>69 000</td>
                            <td>72 000</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <Gallery/>
            </div>
        </section>
    )
}