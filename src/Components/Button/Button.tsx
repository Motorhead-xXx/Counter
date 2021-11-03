import React from "react";
import {CustomButton} from "./ButtonCustom";

type ButtonType = {
    callback?: () => void
    title?: string
    disabled?: boolean
}


export const ButtonCounter = ({callback, title,...props}: ButtonType) => {
    const callbackButton = () => {
        if (callback) {
            callback()
        }
    }

    return(
        <div>
            <CustomButton  style={ {minWidth:"40px",padding:"8px"} } disabled={props.disabled} onClick={callbackButton} color={"primary"} size={"small"} variant="contained">{title}</CustomButton>
        </div>
    )

}
