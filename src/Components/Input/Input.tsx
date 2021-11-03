import React, {ChangeEvent} from "react";
import {TextField} from "@material-ui/core";
import {useSelector} from "react-redux";
import {rootReducerType} from "../../reducers/store";

type InputCounterType = {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    value: string | number
}


export const InputCounter = ({onChange, value}: InputCounterType) => {
    const errorState = useSelector<rootReducerType, boolean>(state => state.counter.error)

    const callbackInput = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event)
    }

    return (
        <div>
            {errorState ?
                <TextField error size={"small"} style={{backgroundColor: "white", borderRadius: "5px"}}
                           variant={'outlined'} onChange={callbackInput} value={value}/> :

                <TextField size={"small"} style={{backgroundColor: "white", borderRadius: "5px"}} color='primary' variant={'outlined'} onChange={callbackInput}
                           value={value}/>
            }

            {/*<TextField  error label="Error"*/}
            {/*    size={"small"} type={'number'} variant={'outlined'} onChange={callbackInput} value={value}  />*/}

            {/*<input type={"number"} onChange={callbackInput} value={value} />*/}
        </div>
    )

}