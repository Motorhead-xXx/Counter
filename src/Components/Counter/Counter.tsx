import {ButtonCounter} from "../button/Button";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../../reducers/store";
import {incCounterAC, resetDisplayAC} from "../../reducers/counter-reducer";
import s from './Counter.module.css'
import {ButtonReset} from "../button/ButtonRES";


const Counter = () => {
    const minValueCounter = useSelector<rootReducerType, string|number>(state => state.counter.minValue)
    const maxValueCounter = useSelector<rootReducerType, string|number>(state => state.counter.maxValue)
    const error = useSelector<rootReducerType, boolean>(state => state.counter.error)
    const setLocal = useSelector<rootReducerType, boolean>(state => state.counter.setLocal)

    const displayValue = useSelector<rootReducerType, string|number>(state => state.counter.displayValue)
    const dispatch = useDispatch()

    const incCounter = () => {
        dispatch(incCounterAC())
    }

    const resetDisplay = () => {
        dispatch(resetDisplayAC(+minValueCounter))
    }

    return (
        <div className={s.wrapperCounter}>
            <div className={s.display}>
                    {
                        error ? <span style={{color: "red", fontSize:"20px",fontWeight:"bold"}}>Invalid value!</span> :

                            setLocal ? <span style={{color: "blue",fontSize:"20px",fontWeight:"bold"}}>Enter values and press "set"!</span>

                                : <span style={displayValue === +maxValueCounter ? {color: "red", fontSize: "40px",fontWeight:"bold"} : {
                                    color: "black",
                                    fontSize: "40px",
                                    fontWeight:"bold"
                                }}>{displayValue}</span>
                    }

            </div>

            <div className={s.buttonWrap}>
                <ButtonCounter disabled={displayValue >= +maxValueCounter || setLocal} callback={incCounter} title={"+"}/>
                <ButtonReset disabled={displayValue === +minValueCounter || setLocal} callback={resetDisplay}/>
            </div>

        </div>
    )
}


export default Counter;