import React from 'react';
import './App.module.css';
import Counter from "./components/counter/Counter";
import {SettingCounter} from "./components/satting/SatingCounter";
import s from './App.module.css'
import {Paper} from "@material-ui/core";


function App() {
    return (

        <div className={s.wrapper}>
            <div className={s.App}>

                <Paper style={{backgroundColor:"#a5bfd0"}} elevation={6}  variant="elevation" >
                <SettingCounter/>
                </Paper >

                <Paper style={{backgroundColor:"#d3b8a1"}} square={true} elevation={4}  variant="elevation">
                    <Counter/>
                </Paper >

            </div>
        </div>

    );
}

export default App;