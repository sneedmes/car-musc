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

function App() {
    const [page, setPage] = useState('main')
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
                    </>
                }
            </section>
        </>
    );
}

export default App;
