import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Achievements} from "./components/Achievements/Achievements";

function App() {
    const [tab, setTab] = useState('main')
    const handleClick=(tab: string)=>{
        setTab(tab)
    }
    return (
        <>
            <Header/>
            {tab && "main" &&
                <>
                    <Achievements/>
                </>
            }
        </>
    );
}

export default App;
