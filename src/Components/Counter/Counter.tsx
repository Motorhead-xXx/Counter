import React from "react";
import s from "./Counter.module.css"
import {ButtonClick} from "../Button/Button";
import {MaxMinType} from "../../App";
import {ButtonDel} from "../Button/ButtonDel";

type counterType = {
    value: MaxMinType
    setValue: (value:MaxMinType) => void
    counterIncrease: () => void
    resetCounter: () => void
}

const Counter = ({value,setValue, ...props}: counterType) => {
    const styleValue = {color: value.display === value.max ? "red" : "black"};
    const condition = value.min < 0 || value.max < 0 || value.max < value.min || value.max === value.min;
    const spanStyle = {color: "red", fontSize: "30px"};

    const Local = Number(localStorage.getItem("max")) !== value.max || Number(localStorage.getItem("min")) !== value.min
    const display = (condition) ? <span style={spanStyle}>Invalid value!</span> : Local ?
        <span style={{color: "blue", fontSize: "18px", alignContent:"center"}}>Enter values and press "set"!</span>: value.display


   const resetCounter = () => {
            props.resetCounter()
   }
    const counterIncrease = () => {
        props.counterIncrease()
    }

    return (
        <div className={s.wrapper}>
            <div className={s.value} style={styleValue}> {display}</div>

            <div className={s.buttonWrapper}>
                <ButtonClick disabled={value.display === value.max || value.max < value.min || value.min < 0 || value.max === value.min || Local}
                        callBack={counterIncrease}>inc</ButtonClick>
                <ButtonDel disabled={value.display === value.min || value.min < 0 || value.max === value.min || value.max < value.min || Local} callBack={resetCounter}>reset</ButtonDel>
            </div>
        </div>
    )
}

export default Counter;