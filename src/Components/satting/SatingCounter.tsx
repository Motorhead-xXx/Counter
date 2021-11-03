import React, {ChangeEvent} from "react";
import {InputCounter} from "../Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType, store} from "../../reducers/store";
import {
    changeButtonDisabledAC,
    changeDisplayValueAC,
    changeErrorAC,
    changeSetLocalAC, minValueDecreaseAC, minValueIncAC,
    settingValueMaxAC,
    settingValueMinAC,
    valueMaxDecreaseAC,
    valueMaxIncAC
} from "../../reducers/counter-reducer";
import {ButtonCounter} from "../button/Button";
import {saveState} from "../../utils/localstorage-utils";
import s from './ParametrCounter.module.css'
import {CustomButton} from "../button/ButtonCustom";


export const SettingCounter = () => {
    const disabled = useSelector<rootReducerType, boolean>(state => state.counter.disabled)
    const minValue = useSelector<rootReducerType, string | number>(state => state.counter.minValue)
    const maxValue = useSelector<rootReducerType, string | number>(state => state.counter.maxValue)
    const dispatch = useDispatch()


    const settingValueMax = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value
        if (!isFinite(+value)) return;
        dispatch(settingValueMaxAC(value))
        dispatch(changeSetLocalAC(true))
        dispatch(changeButtonDisabledAC(false))
    }

    const MaxValueInc = () => {
        dispatch(settingValueMaxAC(maxValue))
        dispatch(changeSetLocalAC(true))
        dispatch(changeButtonDisabledAC(false))
        dispatch(valueMaxIncAC())
    }
    const MaxValueDecrease = () => {
        dispatch(settingValueMaxAC(maxValue))
        dispatch(changeSetLocalAC(true))
        dispatch(changeButtonDisabledAC(false))
        dispatch(valueMaxDecreaseAC())
    }

    const settingValueMin = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value
        if (!isFinite(+value)) return;
        dispatch(settingValueMinAC(value))
        dispatch(changeSetLocalAC(true))
        dispatch(changeButtonDisabledAC(false))
    }

    const MinValueInc = () => {
        dispatch(settingValueMinAC(minValue))
        dispatch(changeSetLocalAC(true))
        dispatch(changeButtonDisabledAC(false))
        dispatch(minValueIncAC())
    }

    const MinValueDecrease = () => {
        dispatch(settingValueMinAC(minValue))
        dispatch(changeSetLocalAC(true))
        dispatch(changeButtonDisabledAC(false))
        dispatch(minValueDecreaseAC())
    }

    if (minValue >= maxValue || minValue < 0 || minValue === "" || maxValue === "") {
        dispatch(changeErrorAC(true))
        dispatch(changeButtonDisabledAC(true))
    } else {
        dispatch(changeErrorAC(false))
    }

    const saveLocalStorage = () => {
        dispatch(changeButtonDisabledAC(true))

        dispatch(changeDisplayValueAC(minValue))

        dispatch(changeSetLocalAC(false))

        saveState({
            counter: store.getState().counter,
        })
    }

    const styleButton = {
        marginLeft: "1px",
        minWidth: "10px",
        padding: "9.8px 6px",
        height: "15px",
        borderRadius: "4px",
    }

    return (

        <div className={s.wrapperSetting}>
            <div className={s.inputWrapper}>
                <InputCounter onChange={settingValueMax} value={maxValue}/>

                <div className={s.buttonWrapper}>
                    <CustomButton onClick={MaxValueInc} style={styleButton}>+</CustomButton>
                    <CustomButton onClick={MaxValueDecrease} style={styleButton}>-</CustomButton>
                </div>

            </div>

            <div className={s.inputWrapper}>
                <InputCounter onChange={settingValueMin} value={minValue}/>

                <div className={s.buttonWrapper}>
                    <CustomButton onClick={MinValueInc} style={styleButton}>+</CustomButton>
                    <CustomButton onClick={MinValueDecrease} style={styleButton}>-</CustomButton>
                </div>

            </div>

            <ButtonCounter callback={saveLocalStorage} title={"set"} disabled={disabled}/>

        </div>
    )

}