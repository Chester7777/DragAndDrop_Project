import React from 'react';
import s from "../src/App.module.scss";
import {Users} from "./Users/Users";




function App() {
    return (
        <div className={s.app}>
            <Users title={"Users"}/>
            <Users title={"Mentors"}/>
        </div>
    );
}


export default App;
