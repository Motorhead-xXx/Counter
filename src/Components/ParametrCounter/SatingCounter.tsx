import React, {ChangeEvent} from "react";
import s from "./ParametrCounter.module.css"
import {ButtonClick} from "../Button/Button";
import {MaxMinType} from "../../App";

type ParametrType = {
    ChangeFilterMax: (e: ChangeEvent<HTMLInputElement>) => void
    ChangeFilterMin: (e: ChangeEvent<HTMLInputElement>) => void
    setLocalStorage: () => void
    value: MaxMinType
    setValue: (value:MaxMinType) => void
}


export const SatingCounter = ({value, ...props}: ParametrType) => {

    let local = (Number(localStorage.getItem("max")) === value.max && Number(localStorage.getItem("min")) === value.min)
    let dis = value.max < 0 || value.min < 0 || value.min === value.max || value.max < value.min

    const localStorageSet = () => {
        props.setLocalStorage()
    }

    return (
        <div className={s.wrapper}>
            <div className={s.inputWrapper}>

                <div className={s.inputString}>
                    max value: <input onChange={props.ChangeFilterMax} value={value.max} type={"number"}
                                      className={dis ? s.inputError : s.input}/>
                </div>


                <div className={s.inputString}>
                    start value: <input onChange={props.ChangeFilterMin} value={value.min} type={"number"}
                                        className={value.min < 0 || value.max === value.min ||
                                        value.max < value.min ? s.inputError : s.input}/>
                </div>
            </div>

            <div className={s.buttonWrapper}>
                <ButtonClick disabled={dis||local} callBack={localStorageSet}>set</ButtonClick>
            </div>


        </div>
    )
}