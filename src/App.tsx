import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import Counter from "./Components/Counter/Counter";
import {SatingCounter} from "./Components/ParametrCounter/SatingCounter";


export type MaxMinType = {
    max:number
    min:number
    display: number
}

function App() {
    let [value, setValue] = useState<MaxMinType>({max:0, min:0, display:0})

    useEffect(() => {
        const counter = localStorage.getItem("counter");
        if (counter) {
            let valMax = JSON.parse(counter)
            setValue(valMax)
        }
    }, []);

    const setLocalStorage = () => {
        localStorage.setItem('counter', JSON.stringify(value))
        localStorage.setItem('max', JSON.stringify(value.max))
        localStorage.setItem('min', JSON.stringify(value.min))
        setValue({...value,display:value.min})
    }

    const ChangeFilterMax = (e: ChangeEvent<HTMLInputElement>) => {
        let valueInput = +e.currentTarget.value
        setValue({...value, max:valueInput})
    }

    const ChangeFilterMin = (e: ChangeEvent<HTMLInputElement>) => {
        let valueInput = +e.currentTarget.value
        setValue({...value, min:valueInput, display:valueInput})
    }

    const counterIncrease = () => {
        if (value.display !== value.max) {
            let valueCounter = value.display + 1
            setValue({...value, display:valueCounter})
        }
    }

    const resetCounter = () => {
        setValue({...value,display:value.min});
    }


    return (
        <div className="App">
            <SatingCounter
                ChangeFilterMax={ChangeFilterMax}
                ChangeFilterMin={ChangeFilterMin}
                setLocalStorage={setLocalStorage}
                value={value}
                setValue={setValue}

            />

            <Counter
                     value={value}
                     setValue={setValue}
                     counterIncrease={counterIncrease}
                     resetCounter={resetCounter}/>
        </div>
    );
}

export default App;