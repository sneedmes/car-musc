import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Achievements} from "./components/Achievements/Achievements";
import {Main} from "./components/Main/Main";
import {Services} from "./components/Services/Services";

function App() {
    const [page, setPage] = useState('main')
    return (
        <>
            <header className="header">
                <Header handleClick={setPage}/>
                {page === "main" &&
                    <>
                        <Main handleClick={setPage}/>
                        <Achievements/>
                    </>
                }
                {page === "services" &&
                    <>
                        <Services handleClick={setPage}/>
                    </>
                }
            </header>
        </>
    );
}

export default App;
