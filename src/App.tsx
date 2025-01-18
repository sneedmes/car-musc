import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Achievements} from "./components/Main/Achievements/Achievements";
import {Main} from "./components/Main/Main";
import {Services} from "./components/Services/Services";
import {Slider} from "./components/Main/Slider/Slider";
import {Advantages} from "./components/Main/Advantages/Advantages";
import {ServicesMain} from "./components/Main/ServicesMain/ServicesMain";
import {Benefits} from "./components/Main/Benefits/Benefits";
import {Gallery} from "./components/Main/Gallery/Gallery";
import {Footer} from "./components/Footer/Footer";
import {AboutService} from "./components/Services/AboutService/AboutService";
import {ServiceBenefits} from "./components/Services/ServiceBenefits/ServiceBenefits";
import {Prices} from "./components/Services/Prices/Prices";

function App() {
    const [page, setPage] = useState('services')
    return (
        <>
            <header className="header">
                <Header handleClick={setPage}/>
                {page === "main" &&
                    <Main handleClick={setPage}/>
                }
                {page === "services" &&
                    <Services handleClick={setPage}/>
                }
            </header>
            <section className="container">
                {page === "main" &&
                    <>
                        <Achievements/>
                        <Slider/>
                        <Advantages/>
                        <ServicesMain/>
                        <Benefits/>
                        <Gallery/>
                    </>
                }
                {page === "services" &&
                    <>
                        <AboutService/>
                        <ServiceBenefits/>
                        <Prices/>
                    </>
                }
            </section>
            <footer>
                <Footer handleClick={setPage}/>
            </footer>
        </>
    );
}

export default App;
